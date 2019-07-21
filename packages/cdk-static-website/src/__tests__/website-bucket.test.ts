import { Stack } from '@aws-cdk/core';
import '@cloudcomponents/jest-cdk-snapshot';
import { WebsiteBucket } from '../website-bucket';

describe('cdk-static-website: website-bucket', (): void => {
    it('snapshot', (): void => {
        const stack = new Stack();

        new WebsiteBucket(stack, 'WebsiteBucket', {
            bucketName: 'testbucket',
            disableUpload: true,
        });

        expect(stack).toMatchCdkSnapshot();
    });
});
