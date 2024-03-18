package com.ABCLAB.Backend.Service;

import com.ABCLAB.Backend.Model.Report;
import com.ABCLAB.Backend.Repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {


    @Autowired
    private ReportRepository reportRepository;

    public List<Report> getAllReports() {
        return reportRepository.findAll();
    }

    public Report getReportById(Long id) {
        return reportRepository.findById(id).orElse(null);
    }

    public Report createReport(Report report) {
        return reportRepository.save(report);
    }

    public Report updateReport(Long id, Report updatedReport) {
        Report report = reportRepository.findById(id).orElse(null);
        if (report != null) {
            report.setPatient(updatedReport.getPatient());
            report.setTest(updatedReport.getTest());
            report.setDoctor(updatedReport.getDoctor());
            report.setTechnician(updatedReport.getTechnician());
            report.setReportDetails(updatedReport.getReportDetails());
            report.setReportDate(updatedReport.getReportDate());
            return reportRepository.save(report);
        }
        return null; // or throw an exception
    }

    public void deleteReport(Long id) {
        reportRepository.deleteById(id);
    }

}
