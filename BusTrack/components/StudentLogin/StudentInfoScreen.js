import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StudentInfoScreen = () => {
  const [studentData, setStudentData] = useState(null);
  const [showStudentData, setShowStudentData] = useState(false);
  const steps = ["Customer Info", "Shipping Info", "Payment", "Step 4"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleComplete = () => {
    setComplete(true);
  };

  return (
    <View style={styles.container}>
      {/* Navigation bar */}
      <View style={styles.navBar}>
        <Text style={styles.navText}>Navigation Bar</Text>
        <TouchableOpacity onPress={() => setShowStudentData(!showStudentData)}>
          <Text style={styles.navIcon}>Show Student Data</Text>
        </TouchableOpacity>
      </View>

      {/* Stepper */}
      <View style={styles.stepperContainer}>
        {steps.map((step, index) => (
          <View key={index} style={[styles.stepItem, currentStep > index + 1 && styles.complete]}>
            <View style={[styles.stepCircle, currentStep === index + 1 && styles.active]}>
              {currentStep > index + 1 || complete ? (
                <Text style={styles.stepText}>✓</Text>
              ) : (
                <Text style={styles.stepText}>{index + 1}</Text>
              )}
            </View>
            <Text style={styles.stepLabel}>{step}</Text>
          </View>
        ))}
        {!complete && (
          <View style={styles.controls}>
            <TouchableOpacity onPress={handlePrev} disabled={currentStep === 1}>
              <Text style={[styles.controlButton, styles.prevButton]}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext} disabled={currentStep === steps.length}>
              <Text style={[styles.controlButton, styles.nextButton]}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Student data */}
      {showStudentData && (
        <View style={styles.studentDataContainer}>
          <Text style={styles.studentDataTitle}>Student Data</Text>
          {studentData ? (
            <View>
              <Text>Name: {studentData.name}</Text>
              <Text>Email: {studentData.email}</Text>
              {/* Add more fields as needed */}
            </View>
          ) : (
            <Text>Loading student data...</Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  navText: {
    fontSize: 20,
  },
  navIcon: {
    fontSize: 16,
    color: '#007BFF',
  },
  stepperContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepCircle: {
    backgroundColor: '#374151',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  active: {
    backgroundColor: '#60A5FA',
  },
  complete: {
    opacity: 0.6,
  },
  stepLabel: {
    marginTop: 5,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlButton: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
  },
  prevButton: {
    backgroundColor: '#ccc',
  },
  nextButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
  },
  studentDataContainer: {
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  studentDataTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default StudentInfoScreen;
