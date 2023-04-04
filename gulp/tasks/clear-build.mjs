/* eslint-disable import/no-extraneous-dependencies */
import {deleteAsync} from 'del';
import config from '../config.mjs';

const clearBuild = () => deleteAsync(config.path.buildFolder);

export default clearBuild;
