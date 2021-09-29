import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export default function Search(props) {
  const {
    ready, 
    value, 
    suggestions: {status, data}, 
    setValue, 
    clearSuggestion,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 43.6532,
        lng: () => -79.3832
      },
      radius: 200 * 1000,
    }
  });
  return (
    <div className="container">
      <Combobox 
        onSelect={async (address) => {
          try {
            const results = await getGeocode({address});
            const {lat, lng} = await getLatLng(results[0]);
            props.panTo({lat, lng});
          } catch(error) {
            console.log(error)
          }
        }}>
        <ComboboxInput 
          value={value} 
          onChange={e => setValue(e.target.value)}
          disabled={!ready}
          placeholder="Enter an address"
        />
        <ComboboxPopover>
          {status === 'OK' && 
            data.map(({id, description}) => (
              <ComboboxOption key={id} value={description} />
          ))}
        </ComboboxPopover>
      </Combobox>

      <div className="box">
        <h1>Map will be here</h1>
      </div>
    </div>
  )
}