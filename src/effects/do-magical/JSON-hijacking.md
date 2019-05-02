// https://stackoverflow.com/a/21510402
Why does Google prepend while(1); to their (private) JSON responses?
for example
/**
* while(1);[['u',[['smsSentFlag','false'],['hideInvitations','false'],
*  ['remindOnRespondedEventsOnly','true'],
*  ['hideInvitations_remindOnRespondedEventsOnly','false_true'],
*  ['Calendar ID stripped for privacy','false'],['smsVerifiedFlag','true']]]]
**/

It prevent JSON Hijacking (https://haacked.com/archive/2009/06/25/json-hijacking.aspx/)