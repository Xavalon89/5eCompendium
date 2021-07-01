import { useEffect, useState } from 'react';

export default () => {
  const [isLoading, setLoading] = useState(true);
  const [spells, setSpells] = useState([]);
  const [spells1, setSpells1] = useState([]);
  const [spells2, setSpells2] = useState([]);
  const [spells3, setSpells3] = useState([]);
  const [spells4, setSpells4] = useState([]);
  const [spells5, setSpells5] = useState([]);
  const [spells6, setSpells6] = useState([]);
  const [spells7, setSpells7] = useState([]);
  const [spells8, setSpells8] = useState([]);
  const [spells9, setSpells9] = useState([]);

  const [errorMessage, setErrorMessage] = useState('');


  // can searchapi getlevel and then search? separate getlevelfunction in hook?s

  const searchApi = async (term) => {
    try {
      fetch(`https://www.dnd5eapi.co/api/spells/?level=0&&name=${term}`)
        .then((response) => response.json())
        .then((json) => setSpells(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      fetch(`https://www.dnd5eapi.co/api/spells/?level=1&&name=${term}`)
        .then((response) => response.json())
        .then((json) => setSpells1(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      fetch(`https://www.dnd5eapi.co/api/spells/?level=2&&name=${term}`)
        .then((response) => response.json())
        .then((json) => setSpells2(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      fetch(`https://www.dnd5eapi.co/api/spells/?level=3&&name=${term}`)
        .then((response) => response.json())
        .then((json) => setSpells3(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      fetch(`https://www.dnd5eapi.co/api/spells/?level=4&&name=${term}`)
        .then((response) => response.json())
        .then((json) => setSpells4(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      fetch(`https://www.dnd5eapi.co/api/spells/?level=5&&name=${term}`)
        .then((response) => response.json())
        .then((json) => setSpells5(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      fetch(`https://www.dnd5eapi.co/api/spells/?level=6&&name=${term}`)
        .then((response) => response.json())
        .then((json) => setSpells6(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      fetch(`https://www.dnd5eapi.co/api/spells/?level=7&&name=${term}`)
        .then((response) => response.json())
        .then((json) => setSpells7(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      fetch(`https://www.dnd5eapi.co/api/spells/?level=8&&name=${term}`)
        .then((response) => response.json())
        .then((json) => setSpells8(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      fetch(`https://www.dnd5eapi.co/api/spells/?level=9&&name=${term}`)
        .then((response) => response.json())
        .then((json) => setSpells9(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } catch (err) {
      setErrorMessage('Enter a location');
    }
  };

  //Call searchApi when component is first rendered
  //BAD CODE!
  //searchApi('pasta')
  useEffect(() => {
    searchApi('');
  }, []);

  return [searchApi, spells, spells1, spells2, spells3, spells4, spells5, spells6, spells7, spells8, spells9, errorMessage];
};
