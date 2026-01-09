import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Demos() {
  const demos = [
    {
      id: 1,
      title: "E-Commerce Platform Demo",
      description: "Test the full e-commerce platform with sample products and checkout",
      url: "#",
    },
    {
      id: 2,
      title: "Task Management Demo",
      description: "Try creating, managing, and organizing tasks in real-time",
      url: "#",
    },
    {
      id: 3,
      title: "AI Chat Demo",
      description: "Interact with the AI-powered chatbot and see it in action",
      url: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">Live Demos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience my projects firsthand. Click below to access live, interactive demos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <Card key={demo.id} className="border-border hover:border-primary transition-all group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{demo.title}</CardTitle>
                <CardDescription>{demo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Launch Demo</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
