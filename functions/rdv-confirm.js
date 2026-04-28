export async function onRequestPost(context) {
  const { metier, ville, date, slot } = await context.request.json()

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'RDV MEA <rdv@mon-espace-artisan.fr>',
      to: ['contact@mon-espace-artisan.fr'],
      subject: `Nouveau RDV — ${metier} à ${ville}`,
      html: `<h2>Nouveau RDV confirmé</h2>
             <p><strong>Métier :</strong> ${metier}</p>
             <p><strong>Ville :</strong> ${ville}</p>
             <p><strong>Créneau :</strong> ${slot} le ${date}</p>`
    })
  })

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' }
  })
}
