/**
 * Google Apps Script for Kenith Labonite Portfolio
 * Logs contact form submissions into a Google Sheet and sends an email notification.
 * 
 * -----------------------------------------------------------------------------
 * QUICK SETUP INSTRUCTIONS (Takes ~2 minutes):
 * -----------------------------------------------------------------------------
 * 1. Open Google Sheets (https://sheets.new) to create a new spreadsheet.
 * 2. Name your spreadsheet (e.g., "Portfolio Contact Messages").
 * 3. In the top menu, click: Extensions > Apps Script.
 * 4. Delete any code in the editor, and paste this entire script.
 * 5. Click the "Save" icon (or press Ctrl + S).
 * 6. Click the blue "Deploy" button (top-right) > "New deployment".
 * 7. In the dialog:
 *    - Click the gear icon next to "Select type" and choose "Web app".
 *    - Description: "Portfolio Contact Form API"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (IMPORTANT: must be "Anyone" so visitors can send messages)
 * 8. Click "Deploy".
 *    - Authorize access when prompted (click "Advanced" > "Go to Untitled project (unsafe)" > "Allow").
 * 9. Copy the "Web app URL" (looks like: https://script.google.com/macros/s/AKfycb.../exec).
 * 10. Open Script.js in your portfolio and paste that URL into GOOGLE_SHEETS_ENDPOINT!
 * -----------------------------------------------------------------------------
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10 seconds for concurrent requests

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Setup header row automatically if sheet is completely new
    if (sheet.getLastRow() === 0) {
      var headers = ['Timestamp', 'Sender Name', 'Email Address', 'Subject / Role', 'Message'];
      sheet.appendRow(headers);

      // Style header row
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#1e1b4b'); // Deep indigo
      headerRange.setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    // Parse incoming data
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var timestamp = Utilities.formatDate(new Date(), 'Asia/Manila', 'yyyy-MM-dd HH:mm:ss');
    var name = data.name || 'Anonymous';
    var email = data.email || 'No email provided';
    var subject = data.subject || 'General Inquiry';
    var message = data.message || 'No message content';

    // Append new row to Google Sheet
    sheet.appendRow([timestamp, name, email, subject, message]);

    // Optional: Send instant email notification to yourself
    try {
      var recipient = Session.getActiveUser().getEmail();
      if (recipient) {
        var emailSubject = '🔔 Portfolio Inquiry: ' + subject + ' (from ' + name + ')';
        var emailBody =
          'You received a new inquiry from your portfolio website!\n\n' +
          'Name: ' + name + '\n' +
          'Email: ' + email + '\n' +
          'Subject: ' + subject + '\n' +
          'Time: ' + timestamp + '\n\n' +
          'Message:\n' + message + '\n\n' +
          '--------------------------------------------\n' +
          'Recorded in your Google Sheet.';

        MailApp.sendEmail(recipient, emailSubject, emailBody);
      }
    } catch (emailErr) {
      // If email quota exceeded or not configured, still record to Sheet
      Logger.log('Email notification skipped: ' + emailErr);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Inquiry recorded' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// For quick testing in the browser
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'active', message: 'Portfolio Google Sheets Web App is running.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
