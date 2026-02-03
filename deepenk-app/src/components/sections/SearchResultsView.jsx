import React from 'react'

function PrimaryCard({ primary, category }) {
  if (!primary) return null
  const name = primary.name ?? primary.title ?? 'Result'
  const price = primary.price ?? primary.fare ?? primary.priceDisplay ?? ''
  const platform = primary.platform ?? ''
  const rating = primary.rating ?? ''
  const badge = primary.badge ?? 'BEST VALUE'
  const image = primary.image ?? 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop'
  const desc = primary.description ?? primary.seller ?? ''

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden max-w-md mx-auto">
      <div className="flex items-center gap-2 px-4 pt-3">
        <span className="text-orange-500 text-base">🔖</span>
        <span className="text-orange-500 font-bold text-xs">{platform || 'Deepenk'}</span>
      </div>
      <div className="p-4">
        <div className="w-full aspect-square overflow-hidden mb-4 flex items-center justify-center bg-gray-50 rounded-xl">
          <img src={image} alt={name} className="w-full h-full object-contain" />
        </div>
        <span className="inline-block bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded mb-2">{badge}</span>
        <h3 className="text-base font-bold text-gray-900 mb-2">{name}</h3>
        {desc && <p className="text-xs text-gray-500 mb-3">{desc}</p>}
        {rating && (
          <div className="flex items-center gap-1 mb-3">
            <span className="bg-yellow-400 text-black text-[10px] px-1.5 py-0.5 rounded">{rating} ★</span>
          </div>
        )}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-gray-900">{price}</span>
        </div>
        <button
          className="w-full py-2.5 rounded-full text-white font-semibold text-sm shadow-md"
          style={{ background: 'linear-gradient(90deg, #FF9900 0%, #FF6F00 100%)' }}
        >
          View on {platform || 'partner'}
        </button>
      </div>
    </div>
  )
}

function InsightsSection({ aiInsights }) {
  if (!aiInsights) return null
  const { aiSummary, whyBestChoice, bundleSuggestions, offers, paymentSuggestions } = aiInsights
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden max-w-md mx-auto mt-6">
      <div className="p-4">
        <h4 className="text-sm font-bold text-gray-900 tracking-wide mb-4">DEEPENK INSIGHTS</h4>
        <div className="space-y-4">
          {aiSummary && (
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">AI Review Summary</p>
              <p className="text-xs text-gray-500 leading-relaxed">{aiSummary}</p>
            </div>
          )}
          {whyBestChoice && (
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">Why Best Choice</p>
              <p className="text-xs text-gray-500 leading-relaxed">{whyBestChoice}</p>
            </div>
          )}
          {Array.isArray(bundleSuggestions) && bundleSuggestions.length > 0 && (
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">Bundle Suggestion</p>
              <ul className="text-xs text-gray-500 space-y-1">
                {bundleSuggestions.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          )}
          {Array.isArray(offers) && offers.length > 0 && (
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">🎟️ Applied offers and Coupons</p>
              <ul className="text-xs text-gray-600 space-y-1">
                {offers.map((o, i) => <li key={i}>● {o}</li>)}
              </ul>
            </div>
          )}
          {Array.isArray(paymentSuggestions) && paymentSuggestions.length > 0 && (
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">Payment Suggestion</p>
              <div className="text-xs text-gray-600 space-y-1">
                {paymentSuggestions.map((p, i) => (
                  <p key={i}><span className="text-gray-800">{p.name}</span> → <span className="text-gray-600">{p.offer}</span></p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function AlternativesList({ alternatives }) {
  if (!Array.isArray(alternatives) || alternatives.length === 0) return null
  return (
    <div className="mt-6 max-w-md mx-auto">
      <h3 className="text-sm font-bold text-gray-900 mb-3">Best Alternative Options</h3>
      <div className="space-y-3">
        {alternatives.map((item, idx) => (
          <div key={item.id ?? idx} className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm flex gap-3">
            {item.image && (
              <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name ?? item.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-900 text-sm">{item.name ?? item.title}</h4>
              {item.specs && <p className="text-[10px] text-gray-500">{item.specs}</p>}
              {item.restaurant && <p className="text-[10px] text-gray-500">{item.restaurant}</p>}
              <p className="font-bold text-gray-900 text-sm mt-1">{item.price}</p>
              {item.originalPrice && <p className="text-[10px] text-gray-400 line-through">{item.originalPrice}</p>}
              {item.discount && <p className="text-[10px] text-green-600">{item.discount}</p>}
            </div>
            <button
              className="self-center px-3 py-1.5 text-white text-[10px] font-semibold rounded-full flex-shrink-0"
              style={{ background: 'linear-gradient(90deg, #FF9900 0%, #FF6F00 100%)' }}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SearchResultsView({ data }) {
  if (!data) return null
  const { primaryRecommendation, aiInsights, alternatives, category } = data
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-8">
      <PrimaryCard primary={primaryRecommendation} category={category} />
      <InsightsSection aiInsights={aiInsights} />
      <AlternativesList alternatives={alternatives} />
    </div>
  )
}
