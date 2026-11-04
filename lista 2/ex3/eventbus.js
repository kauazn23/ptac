const eventos = {}

export function subscribe(evento, callback){
  if (!eventos[evento]){
    eventos[evento] = []
  }

  eventos[evento].push(callback)

  return () =>{
    eventos[evento] = eventos[evento].filter(
      (fn) => fn !== callback
    )
  }}
export function emit(evento, dados){
  if (eventos[evento]){
    eventos[evento].forEach((callback) =>{
      callback(dados)
    })
  }}