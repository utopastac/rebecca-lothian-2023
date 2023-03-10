import React from "react";
import * as MeData from 'data/me';
import * as WorkData from 'data/work';
import * as Pages from 'containers';
import LinkSet from 'components/LinkSet';
//
import * as Colors from 'data/colors';
//
export const WORK_PATH = '/work';
export const ME_PATH = '/me';
//
export const HOME = {title: 'Home', component: Pages.Home, path: '/'};
//
//
//
export const NOT_FOUND = {
  component: Pages.NotFound
}
//
//
export const WORK_THEME = Colors.BLACK_THEME;
export const ME_THEME = Colors.WHITE_THEME;
//
//
//
export const NAV_ITEMS = [
  {
    title: 'Work',
    data: WorkData,
    path: WORK_PATH,
    links: (<LinkSet data={WorkData} basePath={WORK_PATH} />),
    theme: WORK_THEME,
    landingTheme: Colors.WHITE_THEME
  },
  {
    title: 'Personal',
    data: MeData,
    path: ME_PATH,
    links: (<LinkSet data={MeData} basePath={ME_PATH} />),
    theme: ME_THEME,
    landingTheme: Colors.BLACK_THEME
  }
];
