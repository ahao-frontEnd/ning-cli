import { Command } from 'commander'
import pc from 'picocolors'

import pkg from '../../../package.json'
import { logger } from '../../utils/logger'

export const info = (program: Command) =>
    program
        .createCommand('info')
        .description('Display info about the ning-cli')
        .action(() => {
            logger.log(pc.bgGreen(`Product: ning-cli v${pkg.version}`))
            logger.log(pc.green('Author: Ningzhi'))
        })
