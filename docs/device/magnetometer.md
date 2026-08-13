# 磁力计

磁力计属于高级或实验性功能，不建议作为普通用户首次使用的必经步骤。开启磁力计可以大幅延长追踪器的平均漂移时间，但对磁场环境有一定要求。

## 使用前

- 先确认当前追踪器型号是否包含并支持磁力计。
- 先完成常规设备校准和佩戴校准。
- 远离磁铁、扬声器、电机、大型金属结构和其他干扰源。

原始说明书要求使用 2026 年 6 月 4 日或之后的固件。旧固件先完成[固件更新](/device/firmware)，再继续以下操作。

## 启用步骤

1. 从产品支持渠道获取与当前固件匹配的刷写配置工具，打开后点击一次“刷新列表”，再选择接收器。
2. 在“命令”中选择“启用磁力计”，点击发送并等待约 3 秒。
3. 再选择“重启追踪器”，点击发送并等待约 3 秒。
4. 重新打开 SlimeVR 确认磁力计状态。若仍显示禁用，彻底退出 SlimeVR 后再次启动。
5. 使用磁力计时关闭持续校准；初次启用后原地转身几圈，让设备适应当前环境。

<div class="manual-image-grid manual-image-grid--two">
  <figure><img src="/images/magnetometer/step-01.png" alt="磁力计测试功能说明" /><figcaption>确认固件与环境满足要求。</figcaption></figure>
  <figure><img src="/images/magnetometer/step-02.png" alt="磁力计刷写配置工具" /><figcaption>使用刷写配置工具管理磁力计。</figcaption></figure>
  <figure><img src="/images/magnetometer/step-04.png" alt="刷写配置工具选择接收器" /><figcaption>刷新列表后选择接收器。</figcaption></figure>
  <figure><img src="/images/magnetometer/step-05.png" alt="刷写配置工具启用磁力计命令" /><figcaption>选择“启用磁力计”并发送。</figcaption></figure>
  <figure><img src="/images/magnetometer/step-06.png" alt="刷写配置工具重启追踪器命令" /><figcaption>随后选择“重启追踪器”。</figcaption></figure>
  <figure><img src="/images/magnetometer/step-07.png" alt="SlimeVR 磁力计状态" /><figcaption>重启 SlimeVR 后确认状态。</figcaption></figure>
  <figure><img src="/images/magnetometer/step-08.png" alt="SlimeVR 持续校准设置" /><figcaption>磁力计启用时关闭持续校准。</figcaption></figure>
</div>

::: warning 不要用测试功能替代故障排查
方向异常或漂移不一定由磁力计导致。优先检查佩戴方向、校准流程和设备是否松动。
:::
