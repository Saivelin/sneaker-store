import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common'
import { AppService } from './app.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags("Features")
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post('upload')
    @ApiOperation({summary: "Upload file"})
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const randomName = Array(32)
                        .fill(null)
                        .map(() => Math.round(Math.random() * 16).toString(16))
                        .join('')
                    cb(null, `${randomName}${extname(file.originalname)}`)
                }
            })
        })
    )
    uploadFile(@UploadedFile() file: any) {
        const oneKb = 1024
        const oneMb = oneKb * 1024
        if (file.size > oneMb * 10) {
            return `File is too big to load`
        }
        return file.filename
    }

    @Get('uploads/:filename')
    @ApiOperation({summary: "Get uploaded file"})
    async getFile(@Param("filename") filename: string, @Res() res: any){
        res.sendFile(filename, {root:'uploads'})
    }
}
