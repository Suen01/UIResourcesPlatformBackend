// 注册全局组件

// 分页组件
import Pagination from "@/components/Pagination";
// 自定义表格工具组件
import RightToolbar from "@/components/RightToolbar"
// 富文本组件
import Editor from "@/components/Editor"
// 文件上传组件
import FileUpload from "@/components/FileUpload"
// 图片上传组件
import ImageUpload from "@/components/ImageUpload"
// 图片预览组件
import ImagePreview from "@/components/ImagePreview"
// 字典标签组件
import DictTag from '@/components/DictTag'

import BreadcrumbContent from '@/components/BreadcrumbContent'

const compList = [Pagination, RightToolbar, Editor, FileUpload, ImageUpload, ImagePreview, DictTag, BreadcrumbContent];

export function registerGlobComp(app) {
    compList.forEach((comp) => {
        app.component(comp.name || comp.displayName, comp);
    });
  }
  