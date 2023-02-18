const MAX_COUNT = 5;
export default function SelectedLanguage({ $target, initialState }) {
  this.$element = document.createElement("div");
  this.$element.className = "SelectedLanguage";
  this.state = initialState;
  $target.appendChild(this.$element);

  this.setState = (nextState) => {
    this.state = nextState;
    if (this.state.length > MAX_COUNT) {
      const startPosition = this.state.length - MAX_COUNT;
      this.state = this.state.slice(startPosition, MAX_COUNT + startPosition);
    }
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `
        <ul>
            ${this.state.map(
              (item) => `
            <li>${item}
            `,
            )}
        </ul>
        `;
  };
}
