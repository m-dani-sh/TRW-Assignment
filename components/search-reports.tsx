
"use client"

import { useState, useMemo } from "react"
import { Search, Github, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const FYP_LIST = {
  fyp1: {
    // fyp_title: "Machine Learning Model for Predictive Analytics",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/FYP_Library%20Task%20by%20(001%2C018).pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp2: {
    // fyp_title: "AI-Based Student Performance System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Library%20Task%20By%20046%20%26%20212.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp3: {
    // fyp_title: "Real TIme Collaboratibe Code Ediotr",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Time%20Collaborative%20Code%20Editor_052_089.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp4: {
    // fyp_title: "Web-Based Library Management System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Library%20task%20061%20%26%20265.PDF",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp5: {
    // fyp_title: "AI Chatbot for University Helpdesk",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Fyp%20task-065%20%26%20071.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp6: {
    // fyp_title: "Online Examination & Proctoring System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Library%20Task%20By%20067%20%26%20086.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp7: {
    // fyp_title: "Smart E-Learning Platform",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/PAKPLANTS_68_101.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp8: {
    // fyp_title: "AI-Powered Resume Analyzer",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/FYP_072_084.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp9: {
    // fyp_title: "Face Recognition Attendance System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/FYP%20_076_085.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp10: {
    // fyp_title: "Smart Parking Management System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Health%20Sync%20by%20078%20%26%20100.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp11: {
    // fyp_title: "AI-Driven Plagiarism Detection Tool",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Library%20Task%20By%20079%20%26%20358.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp12: {
    // fyp_title: "Student Result Management System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Library%20Task%20By%20080%20%26%20088.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp13: {
    // fyp_title: "Smart Hostel Management System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/life%20saver_91_92.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp14: {
    // fyp_title: "University FYP Digital Library",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Fyp_Prediction%20In%20Supply%20Chain%20(094).pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp15: {
    // fyp_title: "AI-Based Job Recommendation System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/A.R%20Advertisement%20System_99_309.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp16: {
    // fyp_title: "Smart Healthcare Monitoring System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/FYP%20task%20by%20%20(116%2C128).pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp17: {
    // fyp_title: "Online Voting System Using Blockchain",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Library%20Task%20By%20119%20%26%20320.PDF",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp18: {
    // fyp_title: "AI-Based Sentiment Analysis Tool",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Fyp%20task%20121%20%26%20197.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp19: {
    // fyp_title: "Smart Traffic Control System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Fyp%20Task%20(145%20%2C%20287%20).pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp20: {
    // fyp_title: "E-Commerce Recommendation Engine",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Fyp%20(Library%20task)%20146%20%26%20198.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp21: {
    // fyp_title: "AI-Based Fraud Detection System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/fyptask%20214_368.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp22: {
    // fyp_title: "Smart Inventory Management System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/fyp%20task224_%20311.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp23: {
    // fyp_title: "AI-Powered Chat Application",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/FYP%20274_286.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
  fyp24: {
    // fyp_title: "Cloud-Based File Management System",
    pdfUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment/blob/main/Wakeup%20Call%20-%20Drive%20Safe%20%20by%20339%20%26%20388.pdf",
    githubUrl: "https://github.com/m-dani-sh/TRW-Library-Assignment",
  },
};


const studentReports = [
  { id: 1, fypKey: "fyp1", students: [{ rollNo: "2023F-BCS-001", name: "SYED FARZAM ALI" }, { rollNo: "2023F-BCS-018", name: "MUHAMMAD HUZAIFA" }] },
  { id: 2, fypKey: "fyp2", students: [{ rollNo: "2023F-BCS-046", name: "SHAHEER KHAN" }, { rollNo: "2023F-BCS-212", name: "FARIS" }] },
  { id: 3, fypKey: "fyp3", students: [{ rollNo: "2023F-BCS-052", name: "SABIH SHAMSI" }, { rollNo: "2023F-BCS-089", name: "SHAZIL HUSSAIN" }] },
  { id: 4, fypKey: "fyp4", students: [{ rollNo: "2023F-BCS-061", name: "MUHAMMAD YOUSUF" }, { rollNo: "2023F-BCS-265", name: "SAAD ALI" }] },
  { id: 5, fypKey: "fyp5", students: [{ rollNo: "2023F-BCS-065", name: "SYED MUHEEB HASNAIN" }, { rollNo: "2023F-BCS-071", name: "ABDUL WASAY" }] },
  { id: 6, fypKey: "fyp6", students: [{ rollNo: "2023F-BCS-067", name: "HAMZA ANIS" }, { rollNo: "2023F-BCS-086", name: "SHAYAN HAIDER" }] },
  { id: 7, fypKey: "fyp7", students: [{ rollNo: "2023F-BCS-068", name: "EESAR BIN ASAD" }, { rollNo: "2023F-BCS-101", name: "HAMMAD FAISAL" }] },
  { id: 8, fypKey: "fyp8", students: [{ rollNo: "2023F-BCS-072", name: "IRFAN ALI" }, { rollNo: "2023F-BCS-084", name: "AGHA ABDUL RAAFAY" }] },
  { id: 9, fypKey: "fyp9", students: [{ rollNo: "2023F-BCS-076", name: "MUDASSIR ALI" }, { rollNo: "2023F-BCS-085", name: "ABDUL REHMAN KHAN" }] },
  { id: 10, fypKey: "fyp10", students: [{ rollNo: "2023F-BCS-078", name: "ABDUL HASEEB" }, { rollNo: "2023F-BCS-100", name: "ABDUL RAHMAN BAIG" }] },
  { id: 11, fypKey: "fyp11", students: [{ rollNo: "2023F-BCS-079", name: "TAHA HAIDER KHAN" }, { rollNo: "2023F-BCS-358", name: "MUHAMMAD HASHIR" }] },
  { id: 12, fypKey: "fyp12", students: [{ rollNo: "2023F-BCS-080", name: "MOHIB AKRAM" }, { rollNo: "2023F-BCS-088", name: "MUHAMMAD DANISH" }] },
  { id: 13, fypKey: "fyp13", students: [{ rollNo: "2023F-BCS-091", name: "KHADEEJA IFTIKHAR" }, { rollNo: "2023F-BCS-092", name: "MUSFIRAH ZULFIQAR" }] },
  { id: 14, fypKey: "fyp14", students: [{ rollNo: "2023F-BCS-094", name: "ALI HASSAN MIRZA" }] },
  { id: 15, fypKey: "fyp15", students: [{ rollNo: "2023F-BCS-099", name: "ABDUL RAFAY" }, { rollNo: "2023F-BCS-309", name: "MOHAMMAD SHAYAN RAZA" }] },
  { id: 16, fypKey: "fyp16", students: [{ rollNo: "2023F-BCS-116", name: "SYED ASHHAD AMIR" }, { rollNo: "2023F-BCS-128", name: "ARSALAN NAZIR" }] },
  { id: 17, fypKey: "fyp17", students: [{ rollNo: "2023F-BCS-119", name: "HANI NADEEM" }, { rollNo: "2023F-BCS-320", name: "SHAHZAIB AHMED KHAN" }] },
  { id: 18, fypKey: "fyp18", students: [{ rollNo: "2023F-BCS-121", name: "SYEDA MARIYA KARIM" }, { rollNo: "2023F-BCS-197", name: "NABIHA ILYAS" }] },
  { id: 19, fypKey: "fyp19", students: [{ rollNo: "2023F-BCS-145", name: "AREESHA KHAN" }, { rollNo: "2023F-BCS-287", name: "MAAZ SALMAN" }] },
  { id: 20, fypKey: "fyp20", students: [{ rollNo: "2023F-BCS-146", name: "KISSA FATIMA" }, { rollNo: "2023F-BCS-198", name: "AYESHA KHAN" }] },
  { id: 21, fypKey: "fyp21", students: [{ rollNo: "2023F-BCS-214", name: "SYED USMAN ALI" }, { rollNo: "2023F-BCS-368", name: "DANIYAL KHALID" }] },
  { id: 22, fypKey: "fyp22", students: [{ rollNo: "2023F-BCS-224", name: "SAIFULLAH BIN ZUBAIR" }, { rollNo: "2023F-BCS-311", name: "ROSHAAN" }] },
  { id: 23, fypKey: "fyp23", students: [{ rollNo: "2023F-BCS-274", name: "USMAN FAROOQ KAMLANI" }, { rollNo: "2023F-BCS-286", name: "SANA MOIN" }] },
  { id: 24, fypKey: "fyp24", students: [{ rollNo: "2023F-BCS-339", name: "ALISHBA HAMID" }, { rollNo: "2023F-BCS-388", name: "SHEEMAZ REHAN" }] },
];


export function SearchReports() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredReports = useMemo(() => {
    return studentReports.filter((report) =>
      report.students.some(
        (s) =>
          s.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm])

  return (
    <div className="space-y-8">
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search by roll number or student name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 py-6"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report) => {
          const fypData = FYP_LIST[report.fypKey]; // get the corresponding FYP info
          return (
            <Card key={report.id}>
              <CardHeader>
                <CardTitle className="text-base">
                  {report.students.map((s) => s.name).join(" & ")}
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  {report.students.map((s) => s.rollNo).join(" | ")}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm">{fypData.fyp_title}</p>

                <div className="flex gap-2">
                  <Button size="sm" onClick={() => window.open(fypData.pdfUrl)}>
                    <Eye className="w-4 h-4 mr-1" /> View
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => window.open(fypData.githubUrl)}>
                    <Github className="w-4 h-4 mr-1" /> GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}

      </div>
    </div>
  )
}
