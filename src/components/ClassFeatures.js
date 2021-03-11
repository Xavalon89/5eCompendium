//display inside classshow
// can this be done since these aren't connected
// may need a feature showscreen?

useEffect(() => {
  fetch(`https://www.dnd5eapi.co/api/features/${id}`)
    .then((response) => response.json())
    .then((json) => setResult(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);

useEffect(() => {
  fetch(`https://www.dnd5eapi.co/api/classes/${id}/features`)
    .then((response) => response.json())
    .then((json) => setResult(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);
