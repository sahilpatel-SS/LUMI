import { Modal } from '../ui/Modal'
import { SCORE_RUBRIC } from '../../data/passportData'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export function ScoreModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      <div className="p-6 pt-8">
        {/* Tab strip */}
        <div className="border-b border-gray-200 mb-6">
          <span className="inline-block text-sm font-semibold text-accent border-b-[2.5px] border-accent pb-2">
            Overview
          </span>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-5">📊 What the Scores Mean</h2>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="font-bold text-gray-900 pb-3 w-14">Score</th>
              <th className="font-bold text-gray-900 pb-3">
                General Meaning (Applies Across All Skills)
              </th>
            </tr>
          </thead>
          <tbody>
            {SCORE_RUBRIC.map((row, i) => (
              <tr key={row.score} className={i > 0 ? 'border-t border-gray-100' : ''}>
                <td className="py-3 font-semibold text-gray-900 align-top">{row.score}</td>
                <td className="py-3 text-gray-700 leading-snug">{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  )
}
