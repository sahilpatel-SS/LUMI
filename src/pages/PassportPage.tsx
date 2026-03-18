import { useState } from 'react'
import { passportData } from '../data/passportData'
import type { Test, CategoryKey, TestSkill } from '../types/passport'
import {
  Header,
  SessionDropdown,
  OverviewView,
  CategoryView,
  SkillDetailView,
  ScoreModal,
} from '../components/passport'

type ViewType = 'overview' | 'category' | 'skill'

export function PassportPage() {
  const data = passportData

  const [selectedTestId, setSelectedTestId] = useState(data.tests[0].id)
  const [view, setView] = useState<ViewType>('overview')
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<CategoryKey | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<TestSkill | null>(null)
  const [scoreModalOpen, setScoreModalOpen] = useState(false)

  const isHome = view === 'overview'
  const currentTest = data.tests.find(t => t.id === selectedTestId) ?? data.tests[0]

  const handleTestChange = (test: Test) => {
    setSelectedTestId(test.id)
    setView('overview')
    setSelectedCategoryKey(null)
    setSelectedSkill(null)
  }

  const handleSelectCategory = (key: CategoryKey) => {
    setSelectedCategoryKey(key)
    setSelectedSkill(null)
    setView('category')
  }

  const handleSelectSkill = (skill: TestSkill) => {
    setSelectedSkill(skill)
    setView('skill')
  }

  const handleBack = () => {
    if (view === 'skill') {
      setSelectedSkill(null)
      setView('category')
    } else {
      setSelectedCategoryKey(null)
      setView('overview')
    }
  }

  const currentCategoryData =
    selectedCategoryKey ? currentTest.categories[selectedCategoryKey] : null

  return (
    <div className="min-h-screen bg-page">
      <Header personName={data.personName} onInfoClick={() => setScoreModalOpen(true)} />

      <SessionDropdown
        tests={data.tests}
        activeTestId={selectedTestId}
        onChange={handleTestChange}
        disabled={!isHome}
      />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {view === 'overview' && (
          <OverviewView
            test={currentTest}
            certificates={data.certificates}
            innovations={data.innovations}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {view === 'category' && selectedCategoryKey && currentCategoryData && (
          <CategoryView
            categoryKey={selectedCategoryKey}
            categoryData={currentCategoryData}
            onBack={handleBack}
            onSelectSkill={handleSelectSkill}
          />
        )}

        {view === 'skill' && selectedSkill && (
          <SkillDetailView skill={selectedSkill} onBack={handleBack} />
        )}
      </main>

      <ScoreModal isOpen={scoreModalOpen} onClose={() => setScoreModalOpen(false)} />
    </div>
  )
}
