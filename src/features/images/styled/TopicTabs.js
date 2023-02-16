import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'


export function TopicTabs(props){
    return (<Tabs
        id="topic-tabs"
        activeKey={props.topic}
        onSelect={props.onSelect}
        className="mb-3"
    >
        {props.topics.map(t => {
        return (<Tab eventKey={t} key={t} title={t.toUpperCase()}/>)
        })}
    </Tabs>)
}