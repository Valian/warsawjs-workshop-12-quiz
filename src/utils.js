export const sideEffect = func => arg => { func(arg); return arg }

export function loadingWrapper (promise, { loadingVar, errorVar }) {
  this[loadingVar] = true
  this[errorVar] = null
  return promise
    .then(sideEffect(() => { this[loadingVar] = false; this[errorVar] = false }))
    .catch(exc => { this[loadingVar] = false; this[errorVar] = exc.toString(); throw exc })
}
