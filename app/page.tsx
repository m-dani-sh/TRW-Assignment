import { FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SearchReports } from "@/components/search-reports"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8 sm:w-10 sm:h-10" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pretty">FYP Digital Library</h1>
          </div>
          <p className="text-sm sm:text-base text-primary-foreground/90 ml-11">Technical Report Writing Course</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Project Overview Card */}
        {/* <Card className="mb-8 border-primary/10 bg-card">
          <CardContent className="pt-6">
            <div className="space-y-3 text-sm sm:text-base">
              <p>
                This digital library presents Final Year Project (FYP) reports compiled by students in the Technical
                Report Writing course. Each report has been reviewed from the university library and formatted with
                proper academic standards.
              </p>
              <p className="text-muted-foreground">
                <strong>Subject:</strong> Technical Report Writing | <strong>Purpose:</strong> Centralized digital
                repository replacing Excel-based tracking
              </p>
            </div>
          </CardContent>
        </Card> */}

        {/* Search and Reports Component */}
        <SearchReports />

        {/* Statistics Footer */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-2xl sm:text-3xl font-bold text-primary">24</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Total Reports</p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/5 border-secondary/20">
            <CardContent className="pt-6">
              <p className="text-2xl sm:text-3xl font-bold text-secondary">47</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Students</p>
            </CardContent>
          </Card>
          <Card className="bg-accent/5 border-accent/20 col-span-2 sm:col-span-1">
            <CardContent className="pt-6">
              <p className="text-2xl sm:text-3xl font-bold text-accent">92.16%</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Completion</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/40 border-t border-border mt-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>University FYP Digital Library © 2025</p>
          <p className="text-xs mt-2">Technical Report Writing Course Assignment</p>
        </div>
      </footer>
    </main>
  )
}
