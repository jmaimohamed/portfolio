"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Cpu, 
  Code, 
  Smartphone, 
  Wrench, 
  Network,
  CircuitBoard,
  BookOpen,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Calendar,
  Copy,
  Check
} from "lucide-react"
import { knowledgeItems, type KnowledgeItem } from "@/lib/data"

const categoryConfig: Record<string, { icon: React.ElementType; color: string; label: string }> = {
  embedded: { icon: Cpu, color: "from-orange-500 to-red-500", label: "Embedded Systems" },
  devtools: { icon: Wrench, color: "from-blue-500 to-cyan-500", label: "Dev Tools" },
  protocols: { icon: Network, color: "from-green-500 to-emerald-500", label: "Protocols" },
  hardware: { icon: CircuitBoard, color: "from-purple-500 to-pink-500", label: "Hardware" },
  software: { icon: Code, color: "from-yellow-500 to-orange-500", label: "Software" },
  web: { icon: Code, color: "from-secondary to-accent", label: "Web Dev" },
  mobile: { icon: Smartphone, color: "from-violet-500 to-purple-500", label: "Mobile" }
}

export function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const categories = useMemo(() => {
    const cats = new Set(knowledgeItems.map(item => item.category))
    return ["all", ...Array.from(cats)]
  }, [])

  const filteredItems = useMemo(() => {
    return knowledgeItems.filter(item => {
      const matchesSearch = searchQuery === "" || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const copyCode = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section className="pt-24 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-medium">Personal Knowledge Base</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Dev Notes &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
              Research
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my learnings, technical notes, and insights on embedded systems, 
            protocols, development tools, and software engineering best practices.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search notes, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 border-2 border-secondary/20 focus:border-secondary"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => {
              const config = cat === "all" ? null : categoryConfig[cat]
              const Icon = config?.icon || BookOpen
              
              return (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={`${
                    selectedCategory === cat 
                      ? "bg-gradient-to-r from-secondary to-accent text-white border-0" 
                      : "border-secondary/30 hover:border-secondary"
                  }`}
                >
                  {cat === "all" ? (
                    "All"
                  ) : (
                    <>
                      <Icon className="mr-1 h-4 w-4" />
                      {config?.label}
                    </>
                  )}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredItems.length} of {knowledgeItems.length} notes
        </p>

        {/* Knowledge Items Grid */}
        <div className="grid gap-6">
          {filteredItems.map((item) => (
            <KnowledgeCard 
              key={item.id}
              item={item}
              isExpanded={expandedItems.has(item.id)}
              onToggle={() => toggleExpanded(item.id)}
              copiedCode={copiedCode}
              onCopyCode={copyCode}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
              <Search className="h-10 w-10 text-secondary/50" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No notes found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  )
}

function KnowledgeCard({ 
  item, 
  isExpanded, 
  onToggle,
  copiedCode,
  onCopyCode
}: { 
  item: KnowledgeItem
  isExpanded: boolean
  onToggle: () => void
  copiedCode: string | null
  onCopyCode: (code: string, id: string) => void
}) {
  const config = categoryConfig[item.category]
  const Icon = config?.icon || BookOpen

  return (
    <Card className="border-2 border-secondary/20 overflow-hidden hover:border-secondary/40 transition-all">
      <CardHeader 
        className="cursor-pointer hover:bg-secondary/5 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${config?.color} flex-shrink-0`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className={`bg-gradient-to-r ${config?.color} text-white border-0 text-xs`}>
                  {config?.label}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {item.dateAdded}
                </span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="flex-shrink-0">
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {item.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="border-t border-secondary/20 pt-6">
          {/* Content */}
          <div className="prose prose-invert max-w-none mb-6">
            {item.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h4 key={idx} className="text-foreground font-semibold mt-4 mb-2">{paragraph.replace(/\*\*/g, '')}</h4>
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '))
                return (
                  <ul key={idx} className="space-y-1 my-2">
                    {items.map((line, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        {line.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                )
              }
              return <p key={idx} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>
            })}
          </div>

          {/* Code Example */}
          {item.codeExample && (
            <div className="relative">
              <div className="flex items-center justify-between bg-card rounded-t-lg border border-secondary/20 border-b-0 px-4 py-2">
                <span className="text-xs font-medium text-muted-foreground">Code Example</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() => onCopyCode(item.codeExample!, item.id)}
                >
                  {copiedCode === item.id ? (
                    <>
                      <Check className="mr-1 h-3 w-3 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-1 h-3 w-3" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <pre className="bg-background rounded-b-lg border border-secondary/20 p-4 overflow-x-auto">
                <code className="text-sm text-foreground/90 font-mono">{item.codeExample}</code>
              </pre>
            </div>
          )}

          {/* References */}
          {item.references && item.references.length > 0 && (
            <div className="mt-6 pt-4 border-t border-secondary/10">
              <h4 className="text-sm font-semibold text-foreground mb-3">References & Resources</h4>
              <div className="flex flex-wrap gap-2">
                {item.references.map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-sm text-secondary transition-colors"
                  >
                    {ref.title}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  )
}
