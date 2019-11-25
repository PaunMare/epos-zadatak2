const name = document.getElementById('name')
const telefon = document.getElementById('telefon')
const jmbg = document.getElementById('jmbg')
const ulica = document.getElementById('ulica')
const posta = document.getElementById('postanski')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
 if (name.value.length === 0 || name.value == null) {
    messages.push('Potrebno je uneti ime.')
  }
  
  if (telefon.value.length === 0 || telefon.value == null) {
    messages.push('Potrebno je uneti telefon.')
  }
  if (jmbg.value.length !=13){
    messages.push('Potrebno je uneti JMBG u odgovarajućem formatu.')
  }
  if (ulica.value.length === 0 || ulica.value == null) {
    messages.push('Potrebno je uneti naziv vaše ulice.')
  }
  if (posta.value.length != 5) {
    messages.push('Potrebno je uneti poštanski broj.')
  }
  

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(' ')
  }
})