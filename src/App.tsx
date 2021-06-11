import Button from './components/Button/Button';
import Logo from './logo.svg';
import './App.css';
//
// App main entry file 
//
function App() {
  return (
    <div className="componentWrapper">
      <span>Primary Button Sample</span>
      <Button
        onClick={() => {
          alert('Primary Button Clicked!');
        }}
        type="primary"
        value="submit"
        icon={Logo}
      >
        Submit
      </Button>
      <span>Secondary Button Sample</span>
      <Button
        onClick={() => {
          alert('Secondary Button Clicked!');
        }}
        type="secondary"
        value="submit"
      >
        Submit
      </Button>
      <span>Secondary Button Sample with Customizable Styles Elements</span>
      <Button
        onClick={() => {
          alert('Secondary Button with custom styles Clicked!');
        }}
        classname="buttonStyles"
        type="secondary"
        value="submit"
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
