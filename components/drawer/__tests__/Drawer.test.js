import React from 'react';
import { render } from 'enzyme';
import Drawer from '..';

describe('Drawer', () => {
  it('render correctly', () => {
    const wrapper = render(
      <Drawer
        visible
        width={400}
        getContainer={false}
      >
        Here is content of Drawer
      </Drawer>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('have a title', () => {
    const wrapper = render(
      <Drawer
        visible
        title="Test Title"
        getContainer={false}
      >
        Here is content of Drawer
      </Drawer>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('closable is false', () => {
    const wrapper = render(
      <Drawer
        visible
        closable={false}
        getContainer={false}
      >
        Here is content of Drawer
      </Drawer>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('destroyOnClose is true', () => {
    const wrapper = render(
      <Drawer
        destroyOnClose
        visible={false}
        getContainer={false}
      >
        Here is content of Drawer
      </Drawer>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('wrapClassName is test_drawer', () => {
    const wrapper = render(
      <Drawer
        destroyOnClose
        visible={false}
        wrapClassName="test_drawer"
        getContainer={false}
      >
        Here is content of Drawer
      </Drawer>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
