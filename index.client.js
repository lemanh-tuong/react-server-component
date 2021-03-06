/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {unstable_createRoot} from 'react-dom';
import App from './src/Client/App.client';

const initialCache = new Map();
const root = unstable_createRoot(document.getElementById('root'));
root.render(<App initialCache={initialCache} />);
