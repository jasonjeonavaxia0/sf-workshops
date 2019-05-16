global class InvoiceClaimEmail implements Messaging.InboundEmailHandler {
 	global Messaging.InboundEmailResult handleInboundEmail(Messaging.InboundEmail email, Messaging.InboundEnvelope envelope) {
		Messaging.InboundEmailResult result = new Messaging.InboundEmailresult();
        // implement logic later...
        return result;
     }
 }