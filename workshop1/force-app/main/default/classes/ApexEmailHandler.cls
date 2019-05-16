global class ApexEmailHandler implements Messaging.InboundEmailHandler {
      global Messaging.InboundEmailResult handleInboundEmail(Messaging.InboundEmail email, Messaging.InboundEnvelope envelope) {
          Messaging.InboundEmailResult result = new Messaging.InboundEmailresult();
          
          TestObject__c t = new TestObject__c();
          insert t; 

          Note newNote = new Note();
          newNote.Body = email.plainTextBody; 
          newNote.Title = email.subject;
          newNote.ParentId = t.Id;
          
          insert newNote;
          System.debug('Email result: ' + result);
          
          result.success = true;
          
          return result;
      }
  }