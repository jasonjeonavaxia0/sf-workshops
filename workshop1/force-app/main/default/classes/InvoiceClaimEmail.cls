global class InvoiceClaimEmail implements Messaging.InboundEmailHandler {
 	global Messaging.InboundEmailResult handleInboundEmail(Messaging.InboundEmail email, Messaging.InboundEnvelope envelope) {
		Messaging.InboundEmailResult result = new Messaging.InboundEmailresult();
        // 
        // Call the Flow

        Map<String, Object> params = new Map<String, Object>{
            							'EmailSubject'	=> email.subject,
                                        'EmailBody'		=> email.plainTextBody
                                      };
        
        Flow.Interview.CreatInvoiceClaim createInvoiceClaimFlow = new Flow.Interview.CreatInvoiceClaim(params);
        createInvoiceClaimFlow.start();
        System.debug('Flow called ');
        return result;
     }
 }