import Button from 'react-bootstrap/Button'



export function SearchBar(props){

    return (<form style={{float: 'right'}}  onSubmit={(e) => {
        e.preventDefault()
      }}>
        <div style={{display: 'flex', alignItems: 'center',}}>
          <input type="text" placeholder="Search.." value={props.value} onChange={e => {
            props.onChange(e.target.value)
            }} />
          <Button variant="light">
            <img height={'20px'} width={'20px'} src={"https://img.icons8.com/search"} alt={"Search images"} />
          </Button>
        </div>
      </form>)
}


