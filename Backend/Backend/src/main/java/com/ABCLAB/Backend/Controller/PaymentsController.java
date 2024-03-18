package com.ABCLAB.Backend.Controller;

import com.ABCLAB.Backend.Model.PaymentDetails;
import com.ABCLAB.Backend.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaymentsController {
    @Autowired
    private EmailService emailService;

    @PostMapping("/api/submitPayment")
    public String submitPayment(@RequestBody PaymentDetails paymentDetails) {
        // Assuming PaymentDetails is a class with 'email' and 'amount' fields
        String email = paymentDetails.getEmail();
        double amount = paymentDetails.getAmount();

        emailService.sendPaymentReceiptEmail(email, amount);

        return "Payment submitted successfully";
    }
}
