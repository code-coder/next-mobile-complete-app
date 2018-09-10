import React, { Component } from 'react';
import { LocaleProvider } from 'antd-mobile';
import enUS from 'antd-mobile/lib/locale-provider/en_US';

export default class Layout extends Component {
  render() {
    const { language, children } = this.props;
    const locale = language && language.substr(0, 2) === 'en' ? enUS : undefined;

    return (
      <LocaleProvider locale={locale}>
        <div className="main-layout">
          <div className="main-content">{children}</div>
        </div>
      </LocaleProvider>
    );
  }
}