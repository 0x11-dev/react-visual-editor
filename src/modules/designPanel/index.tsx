import React, { useEffect, useRef, useState } from 'react';
import { reduxConnect } from '@/utils';
import { Spin } from 'antd';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { ACTION_TYPES } from '@/models';
import styles from './style.less';
import { Dispatch } from 'redux';
import { PlatformInfoType, SelectedComponentInfoType, VirtualDOMType } from '@/types/ModelType';
import { oAllComponents } from '@/modules/designPanel/confg';
import config from '@/configs';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

interface DesignPanelPropsType {
  selectedComponentInfo: SelectedComponentInfoType,
  hoverKey: string | null,
  dispatch?: Dispatch,
  componentConfigs?: VirtualDOMType[],
  platformInfo?: PlatformInfoType
}


function DesignPanel(props: DesignPanelPropsType) {

  const { componentConfigs, platformInfo, dispatch, selectedComponentInfo, hoverKey } = props;
  const [spinShow, setSpinShow] = useState(true);
  let componentNameResult: any, resultProps: any;

  let designPage: any = null;
  if (!isEmpty(componentConfigs)) {
    const { componentName, key } = componentConfigs![0];
    componentNameResult = componentName;
    resultProps = {
      componentConfig: componentConfigs![0],
      path: '[0]',
      domTreeKeys: [key],
      selectedComponentInfo,
      hoverKey,
      dispatch,
    };
    designPage = React.createElement(get(oAllComponents, componentNameResult), resultProps);
  }
  // const divContainer: any = useIframe({ id: 'dnd-iframe', designPage, setSpinShow });
  const divContainer = useRef(null);

  useEffect(() => {
    if (!spinShow) {
      if (!divContainer.current) {
        const iframe: any = document.getElementById('dnd-iframe');
        divContainer.current = iframe.contentDocument.getElementById('dnd-container');
      }
      ReactDOM.render(designPage, divContainer.current);
    }
  }, [divContainer.current, designPage, spinShow]);


  const { size } = platformInfo!;


  const style = { width: size[0], maxHeight: size[1], transition: 'all 700ms' };

  return (
    <div style={style} className={classNames(`${styles['browser-mockup']} ${styles['with-url']}`)}>
      <Spin size={'large'}
            style={{ maxHeight: '100%' }}
            wrapperClassName={styles['dnd-container']}
            spinning={spinShow}
      >

        <iframe onMouseLeave={() => dispatch!({ type: ACTION_TYPES.clearHovered })}
                id="dnd-iframe"
                className={styles['dnd-container']}
                srcDoc={config.iframeSrcDoc}
                onLoad={() => setSpinShow(false)}
        />
      </Spin>
    </div>
  );
}

export default reduxConnect(['componentConfigs', 'platformInfo', 'selectedComponentInfo', 'hoverKey'])(DesignPanel);
