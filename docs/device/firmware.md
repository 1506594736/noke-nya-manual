# 固件更新

固件更新属于维护操作。设备工作正常时，不需要仅为了追求版本号而反复更新。

## 更新前检查

- 确认固件明确适用于当前追踪器或接收器型号。
- 确认追踪器与接收器固件版本相互兼容。
- 确保电脑和设备供电稳定。
- 关闭可能占用设备端口的软件。
- 仅使用 Neko Nya 官方确认的固件与工具。

::: danger 不要中断更新
固件写入过程中不要拔出设备、关闭工具或让电脑进入睡眠。使用错误固件可能导致设备无法启动或无法配对。
:::

## 如何查看版本

在 SlimeVR 主界面点击想查看的追踪器。设备信息面板会显示当前固件版本。

<div class="manual-image-grid manual-image-grid--two">
  <figure><img src="/images/firmware/step-01.png" alt="SlimeVR 追踪器列表和版本入口" /><figcaption>在追踪器列表中选择目标设备。</figcaption></figure>
  <figure><img src="/images/firmware/step-02.png" alt="SlimeVR 追踪器版本号位置" /><figcaption>箭头位置显示当前版本号。</figcaption></figure>
</div>

## 电脑更新追踪器固件

1. 首先按三次 `RST` 功能键（可以按充电底座的，也可以按追踪器的；直接操作追踪器时可用牙签轻戳复位孔）。

   ::: warning 连接接口
   充电底座只有靠近按钮的四个接口支持连接电脑。
   :::

   <div class="manual-image-grid manual-image-grid--two">
     <figure><img src="/images/firmware/step-03.png" alt="充电底座支持电脑连接的接口位置" /></figure>
     <figure><img src="/images/controls/step-03.png" alt="充电底座 SW0 和 RST 按键" /></figure>
   </div>

2. 按三次 `RST` 后，追踪器会进入 DFU 模式，此时红灯闪烁。接入电脑后会出现名为 `tk_boot` 的可移动磁盘，将从官方渠道获取的最新匹配固件拖入其中即可。

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/firmware/step-04.png" alt="Windows 中显示 tk_boot 固件磁盘" /><figcaption>DFU 模式下的 `tk_boot` 磁盘示例。</figcaption></figure>
   </div>

## 失败恢复

如果更新后设备无法识别、无法启动或无法配对，请停止重复刷写，记录设备型号、所用固件文件、工具提示和指示灯状态，然后前往[联系支持](/support/)。

## 版本记录

| 版本 | 适用设备 | 发布日期 | 主要变化 |
| --- | --- | --- | --- |
| 待核对 | 待核对 | 待核对 | 从现有固件资料迁移 |
