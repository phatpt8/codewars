class Bromise {
  constructor(callback) {
    this.value = null
    const states = {
      Pending: 'pending',
      Resolved: 'resolved',
      Rejected: 'rejected'
    }
    const tryCall = callback => Bromise.try(() => callback(this.value))
    const laterCalls = []
    const callLater = thenOrCatch => callback => new Bromise(resolve => laterCalls.push(() => resolve(thenOrCatch()(callback))))
    const adapters = {
      [states.Pending]: {
        state: states.Pending,
        then: callLater(() => this.then),
        catch: callLater(() => this.catch),
      },
      [states.Resolved]: {
        state: states.Resolved,
        then: tryCall,
        catch: () => this,
      },
      [states.Rejected]: {
        state: states.Rejected,
        then: () => this,
        catch: tryCall,
      }
    }
    const changeState = state => Object.assign(this, adapters[state])

    const getCallback = state => value => {
      if (value instanceof Bromise && state == states.Resolved) {
        value.then(v => apply(states.Resolved, v))
        value.catch(v => apply(states.Rejected, v))
      } else {
        apply(state, value)
      }
    }

    const apply = (state, value) => {
      if (this.state === states.Pending) {
        this.value = value
        changeState(state)
        laterCalls.forEach(call => call())
      }
     
    }

    const resolver = getCallback(states.Resolved)
    const rejecter = getCallback(states.Rejected)

    changeState(states.Pending)

    try {
      callback(resolver, rejecter)
    } catch (e) {
      rejecter(e)
    }
  }

  static resolve(value) {
    return new Bromise(resolve => resolve(value))
  }

  static reject(value) {
    return new Bromise(reject => reject(value))
  }

  static try(callback) {
    return new Bromise(resolve => resolve(callback()))
  }
}

// Testing
let p = new Bromise(resolve => resolve('Resolved'))
p.then(v => console.log(v)).catch()

let p1 = new Bromise((_, reject) => reject('Rejected'))
p1.then().catch(v => console.log(v))

let p2 = new Bromise(() => {
  throw 'cc'
})
p2.then(v => console.log('then' + v)).catch(v => console.log('catch:' + v))

let p3 = new Bromise(resolve => {
  setTimeout(() => resolve('Resolved after 200ms'), 200)
})
p3.then(v => console.log(v)).catch(v => console.log('catch:' + v))