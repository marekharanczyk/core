/*
Copyright 2018 OpenFin Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import * as assert from 'assert';
import * as mockery from 'mockery';
import {mockElectron, lastLogValue, lastVlogValue} from './electron';

mockery.registerMock('electron', mockElectron);
mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});
import * as errors from '../src/common/errors';

describe('Errors', () => {
    describe('errorToPojo', () => {
        it('Should return a stringifiable error', () => {
            const err = new Error('Test Error');
            const errPojo = errors.errorToPOJO(err);
            const parsedErr = JSON.parse(JSON.stringify(errPojo));

            assert(parsedErr.stack !== undefined);
            assert(parsedErr.message !== undefined);
        });

    });
});
