import { StayPreview } from './stay-preview'

export function StayList({ stays, onRemoveStay, onUpdateStay }) {
  return (
    <section className="main-container card-layout">
      {stays.map((stay) => (
        <div className="preview-card" key={stay._id}>
          <StayPreview
            key={stay._id}
            stay={stay}
            onRemoveStay={onRemoveStay}
            onUpdateStay={onUpdateStay}
          />
        </div>
      ))}
    </section>
  )
}
