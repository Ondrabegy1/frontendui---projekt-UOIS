import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SubjectMediumCard } from './SubjectMediumCard'

export const SubjectLargeCard = ({subject, children}) => {
    return (
        <CardCapsule title={"Subjekt " + subject?.name}>
        <Row>
            <Col md={3}>
                <SubjectMediumCard subject={subject}/>
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                <SubjectMediumCard subject={subject}/>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                {JSON.stringify(subject)}
            </Col>
        </Row>
    </CardCapsule>
    )
}