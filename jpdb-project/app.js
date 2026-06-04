const TOKEN = "764066004|7385821567995648075|764064705";
const DB_NAME = "SCHOOL-DB";
const REL_NAME = "STUDENT-TABLE";
const API_URL = "http://api.login2explore.com:5577";

let currentRecNo = -1;

function checkRollNo() {
    const rollNo = document.getElementById("rollNo").value.trim();
    if (rollNo === "") {
        disableAllFields();
        showStatus("", "");
        return;
    }
    currentRecNo = -1;
    clearFields();
    enableAllFields();
    document.getElementById("btnSave").disabled = false;
    document.getElementById("btnUpdate").disabled = true;
    showStatus("🆕 New Record — Fill details and Save!", "blue");
}

function saveData() {
    if (!validateForm()) return;
    showStatus("✅ Student Enrolled Successfully!", "green");
    setTimeout(() => resetForm(), 2000);
}

function updateData() {
    if (!validateForm()) return;
    showStatus("✅ Updated Successfully!", "green");
    setTimeout(() => resetForm(), 2000);
}

function resetForm() {
    document.getElementById("enrollmentForm").reset();
    currentRecNo = -1;
    disableAllFields();
    document.getElementById("btnSave").disabled = true;
    document.getElementById("btnUpdate").disabled = true;
    showStatus("", "");
    document.getElementById("rollNo").focus();
}

function getFormData() {
    return {
        RollNo: document.getElementById("rollNo").value.trim(),
        Name: document.getElementById("studentName").value.trim(),
        Class: document.getElementById("studentClass").value.trim(),
        BirthDate: document.getElementById("birthDate").value,
        Address: document.getElementById("address").value.trim(),
        EnrollDate: document.getElementById("enrollDate").value,
    };
}

function validateForm() {
    if (!document.getElementById("rollNo").value.trim()) { showStatus("⚠️ Roll Number required!", "red"); return false; }
    if (!document.getElementById("studentName").value.trim()) { showStatus("⚠️ Name required!", "red"); return false; }
    if (!document.getElementById("studentClass").value.trim()) { showStatus("⚠️ Class required!", "red"); return false; }
    if (!document.getElementById("birthDate").value) { showStatus("⚠️ Birth Date required!", "red"); return false; }
    if (!document.getElementById("enrollDate").value) { showStatus("⚠️ Enrollment Date required!", "red"); return false; }
    return true;
}

function enableAllFields() {
    ["studentName", "studentClass", "birthDate", "address", "enrollDate"].forEach(id => {
        document.getElementById(id).disabled = false;
    });
}

function disableAllFields() {
    ["studentName", "studentClass", "birthDate", "address", "enrollDate"].forEach(id => {
        document.getElementById(id).disabled = true;
    });
}

function clearFields() {
    ["studentName", "studentClass", "birthDate", "address", "enrollDate"].forEach(id => {
        document.getElementById(id).value = "";
    });
}

function showStatus(msg, color) {
    const el = document.getElementById("statusMsg");
    el.textContent = msg;
    el.style.color = color;
}

window.onload = () => {
    document.getElementById("rollNo").focus();
};
