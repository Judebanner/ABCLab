package com.ABCLAB.Backend.Repository;

import com.ABCLAB.Backend.Model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

}
