import React from 'react';
import PropTypes from 'prop-types';
import { Button, Layout, Menu, Row, Col} from 'antd';
import './index.css';

const styles = {
  barIcon: {
    fontSize: '16px',
    color: '#999'
  }
};

const ContributionMetaBar = (props) => {
  const {metaImage, name, reputation} = props

  return (
    <div className="contribution-bar ">
      <Layout style={{ backgroundColor: '#fff' }}>
        <div className="contribution-info-bar-container">
            
          <div className="image" style={{width: '200px'}}>
            <img src={metaImage} style={{width: '100%'}}/>
            <Row style={{position: 'absolute', top: '140px', padding: '5px'}} type="flex" justify='center' align="middle">
              <Col>
                <h3>{name}</h3>
              </Col>
              <Col style={{marginLeft: '10px'}}>
                <Button style={{fontWeight:'600'}}>{reputation}</Button>
              </Col>
            </Row>
          </div>
          

          <Menu style={{height: '100%', borderRight: 0}}>
            <Menu.Item key="contibution">
              <i style={styles.barIcon} className="fas fa-map-marker-alt"/>
              <span className="contribution-info-bar-label">Contribution</span>
            </Menu.Item>
            <Menu.Item key="review" disabled={false}>
              <i style={styles.barIcon} className="fas fa-globe-asia"/>
              <span className="contribution-info-bar-label">Review</span>
            </Menu.Item>
            <Menu.Item key="sponsor" disabled={false}>
              <i style={styles.barIcon} className="far fa-clock"/>
              <span className="contribution-info-bar-label">Sponsor</span>
            </Menu.Item>
            <Menu.Item key="moderator" disabled={false}>
              <i style={styles.barIcon} className="fas fa-bolt"/>
              <span className="contribution-info-bar-label">Moderator </span>
            </Menu.Item>
            <Menu.Item key="pending" disabled={false}>
              <i style={styles.barIcon} className="fas fa-dollar-sign"/>
              <span className="contribution-info-bar-label">Pending </span>
            </Menu.Item>
            <Menu.Item key="reserve" disabled={false}>
              <i style={styles.barIcon} className="fas fa-dollar-sign"/>
              <span className="contribution-info-bar-label">Reserve </span>
            </Menu.Item>
          </Menu>

          <Menu style={{height: '100%', borderRight: 0, marginTop: '20px'}}>
            <Menu.Item key="guidelines">
              <i style={styles.barIcon} className="fas fa-map-marker-alt"/>
              <span className="contribution-info-bar-label">Guidelines</span>
            </Menu.Item>
            <Menu.Item key="faq" disabled={false}>
              <i style={styles.barIcon} className="fas fa-globe-asia"/>
              <span className="contribution-info-bar-label">FAQ</span>
            </Menu.Item>
            <Menu.Item key="tos" disabled={false}>
              <i style={styles.barIcon} className="far fa-clock"/>
              <span className="contribution-info-bar-label">TOS</span>
            </Menu.Item>
          </Menu>
        </div>
      </Layout>
    </div>
  );
};


export default ContributionMetaBar;