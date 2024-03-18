package com.ABCLAB.Backend.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender emailSender;

    @Value("${spring.mail.username}") // Assuming you've configured your email sender address in application.properties or application.yml
    private String senderEmail;

    public void sendPaymentReceiptEmail(String to, double amount) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(senderEmail); // Set the sender email address
        message.setTo(to);
        message.setSubject("Payment Receipt from ABC Laboratories");
        message.setText("Dear Patient,\n\nYour payment of $" + amount + " has been successfully processed. Thank you for choosing ABC Laboratories.\n\nBest regards,\nABC Laboratories Team");
        emailSender.send(message);
    }
}
