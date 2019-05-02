function MyPromise(action) {
  this.status = 'pending';
  this.value = undefined;
  this.thenCallbacks = [];
  this.catchCallback = null;
  this.finallyCallback = null;

  this.then = function (func) {
    this.thenCallback.push(func);
    return this;
  }

  this.catch = function (func) {
    this.catchCallback = func;
    return this;
  }

  this.finally = function (func) {
    this.finallyCallback = func;
    return this;
  }

  action(resolver.bind(this), rejector.bind(this));

  function resolver(value) {
    this.status = 'resolved';
    this.value = value;
    this.thenCallbacks.forEach(function (func) {
      func(this.value);
    }, this);
    if (this.finallyCallback) {
      this.finallyCallback(this.value);
    }
  }

  function rejector(value) {
    this.status = 'rejected';
    this.value = value;

    if (this.catchCallback) {
      this.catchCallback(this.value);
    }

    if (this.finallyCallback) {
      this.finallyCallback(this.value);
    }
  }
}

const states = {
  resolved: 'resolved',
  rejected: 'rejected',
  pending: 'pending'
}

class Bromise {
  constructor(action) {
    const gears = {
      [states.resolved]: {
        state: states.resolved,
        // chain mechanism
        then: onResolved => Bromise.resolve(onResolved(this.value)),
        catch: _ => this,
      },
      [states.rejected]: {
        state: states.rejected,
        // ignore mechanism
        then: _ => this,
        catch: tryCall,
      },
      [states.pending]: {
        state: states.pending,
      }
    }

    const tryCall = callback => Bromise.try(() => callback(this.value));
    const changeState = state => Object.assign(this, gears[state]);
    const getCallback = state => value => {
      this.value = value;
      changeState(state);
    }

    const resolver = getCallback(states.resolved);
    const rejector = getCallback(states.rejected);
    changeState(states.pending);

    try {
      action(resolver, rejector);
    } catch (err) {
      rejector(err);
    }
  }

  static resolve(value) {
    return new Bromise(resolve => resolve(value));
  }

  static reject(value) {
    return new Bromise((_, reject) => reject(value));
  }

  static try(callback) {
    return new Bromise(resolve => resolve(callback()));
  }
}



class Bromise2 {
  constructor(action) {
    const gears = {
      [states.resolved]: {
        state: states.resolved,
        then: onResolved => Bromise2.resolve(onResolved(this.value)),
      },
      [states.rejected]: {
        state: states.rejected,
        then: _ => this,
      },
      [states.pending]: {
        state: states.pending
      }
    }

    const changeState = state => Object.assign(this, gears[state]);
    const tryCallback = state => value => {
      this.value = value;
      changeState(state);
    }
    const resolve = tryCallback(states.resolved);
    const reject = tryCallback(states.rejected);

    action(resolve, reject);
  }

  static resolve(value) {
    return new Bromise2(resolve => resolve(value));
  }

  static reject(value) {
    return new Bromise2((_, reject) => reject(value));
  }
}