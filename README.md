# Neko Nya 中文说明书

基于 VitePress 的本地说明书首版。

## 本地运行

```powershell
npm install
npm run docs:dev
```

默认访问地址：`http://localhost:5173/`

## 自己编辑

在 PowerShell 中进入项目目录：

```powershell
Set-Location -LiteralPath 'C:\Users\HULIMIAO\Documents\Codex\2026-08-11\x\outputs\noke-nya-manual'
npm run docs:dev -- --host 127.0.0.1 --port 5174
```

然后打开 `http://127.0.0.1:5174/`。修改文件并保存后，页面会自动刷新。

常用编辑位置：

- 首页文字、首页入口：`docs/.vitepress/theme/ManualHome.vue`
- 首页和正文样式：`docs/.vitepress/theme/custom.css`
- 顶部导航、侧边栏、网站标题：`docs/.vitepress/config.mts`
- 快速开始：`docs/guide/quick-start.md`
- 组装佩戴：`docs/guide/assembly.md`
- 充电和按键：`docs/guide/charging-controls.md`
- 软件教程：`docs/software/index.md`
- 故障排查：`docs/support/troubleshooting.md`
- 联系支持：`docs/support/index.md`
- 教程图片：`docs/public/images/` 下对应的分类文件夹

Markdown 图片写法：

```md
![图片说明](/images/quick-start/step-01.png)
```

图片保存到 `docs/public/images/` 后，路径从 `/images/` 开始写，不要写 `docs/public`。

图片在说明书中可以直接点击放大，按 `Esc` 关闭大图。

停止本地预览：在运行 VitePress 的 PowerShell 窗口按 `Ctrl+C`。

项目内的 `.npmrc` 已针对国内网络配置：

- 普通依赖使用 `npmmirror` 国内镜像。
- Rollup 和 esbuild 的 Windows 原生组件使用 npm 官方源，避免镜像中的原生文件异常。
- 下载缓存在项目的 `.npm-cache` 中；重复安装会优先复用缓存。
- 安装失败会自动重试，并关闭不影响运行的审计与赞助请求。

这些设置只作用于本项目，不会修改电脑上的全局 npm 配置。

## 构建检查

```powershell
npm run docs:build
npm run docs:preview
```

## 部署到阿里云 ESA Pages（自动）

本仓库通过阿里云 **ESA Pages** 部署：推送到 `main` 分支后自动构建发布。

### 首次配置（在阿里云控制台）

1. 进入 **ESA（边缘安全加速）→ Pages → 创建函数/绑定 Git 仓库**。
2. 关联本 GitHub 仓库（`1506594736/noke-nya-manual`）。
3. 填写部署参数：

   | 字段 | 值 |
   |---|---|
   | 项目名称 | `noke-nya-manual` |
   | 生产分支 | `main` |
   | 安装命令 | `npm install` |
   | 构建命令 | `npm run build` |
   | 根目录 | `/` |
   | 静态资源目录 | `docs/.vitepress/dist` |
   | 函数文件路径 | （留空） |
   | Node.js 版本 | `22.x` |

4. 部署完成后可绑定自定义域名并自动签发 HTTPS 证书。

### 说明

- 本项目已关闭 VitePress 的 `cleanUrls`，页面链接带 `.html` 后缀，兼容各类静态托管。
- 构建产物在 `docs/.vitepress/dist/`。

## 内容来源

- 现有 WPS 说明书：https://www.kdocs.cn/l/cbMLAawWn4VS
- 本版仅整理中文内容。
- 未能从 WPS 稳定提取的产品参数和图片已标记为待核对。
