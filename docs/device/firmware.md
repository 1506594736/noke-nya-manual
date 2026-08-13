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

## 电脑更新流程

1. 下载对应型号的固件与更新工具。
2. 将设备连接至电脑。
3. 在工具中确认设备型号和当前版本。
4. 选择匹配的固件并开始更新。
5. 等待工具明确显示完成。
6. 重新启动设备并检查版本。
7. 确认追踪器与接收器仍能正常连接。

## DFU 更新流程

1. 连按三次 `RST` 功能键。可使用充电底座的按键；直接操作追踪器时可用非金属细棒轻按复位孔。
2. 追踪器进入 DFU 模式后会红灯闪烁。
3. 将追踪器放入充电底座并连接电脑。原始说明书指出，底座靠近按键的四个接口支持电脑连接。
4. 电脑出现名为 `tk_boot` 的可移动磁盘后，将与设备型号匹配的官方固件文件复制到该磁盘。
5. 等待写入结束，再重新启动设备并检查版本与连接状态。

<div class="manual-image-grid manual-image-grid--two">
  <figure><img src="/images/firmware/step-03.png" alt="充电底座支持电脑连接的接口位置" /><figcaption>底座中靠近按键的四个接口支持连接电脑。</figcaption></figure>
  <figure><img src="/images/firmware/step-04.png" alt="Windows 中显示 tk_boot 固件磁盘" /><figcaption>DFU 模式下的 `tk_boot` 磁盘示例。</figcaption></figure>
</div>

## 失败恢复

如果更新后设备无法识别、无法启动或无法配对，请停止重复刷写，记录设备型号、所用固件文件、工具提示和指示灯状态，然后前往[联系支持](/support/)。

## 版本记录

| 版本 | 适用设备 | 发布日期 | 主要变化 |
| --- | --- | --- | --- |
| 待核对 | 待核对 | 待核对 | 从现有固件资料迁移 |
