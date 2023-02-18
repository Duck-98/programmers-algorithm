import { fetchLanguages } from "./api.js";
import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };
  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    suggestion.setState({
      selectedIndex: 0,
      items: this.state.fetchedLanguages,
    });
  };
  const searchInput = new SearchInput({
    $target,
    initialState: "",
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguages: [],
        });
      } else {
        const languages = await fetchLanguages(keyword);
        this.setState({
          fetchedLanguages: languages,
        });
        console.log(languages);
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: {
      selectedIndex: 0,
      items: [],
    },
    onSelect: (language) => {
      alert(language);
      // 이미 선택된 언어라면 맨 뒤로 보내기
      const nextSelectedLanguages = [...this.state.selectedLanguages];
      const index = nextSelectedLanguages.findIndex(
        (selectedLanguages) => selectedLanguages === language,
      );
      if (index > -1) {
        nextSelectedLanguages.splice(index, 1);
      }
      nextSelectedLanguages.push(language);

      this.setState({
        ...this.state,
        selectedLanguages: nextSelectedLanguages,
      });
    },
  });
}
