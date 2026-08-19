# VRChat 配置

本页适用于通过 SteamVR 直连或串流游玩 VRChat 的情况。先完成[SlimeVR 软件使用](/software/)中的设备识别和追踪器分配。

## 首次进入 VRChat 前

::: tip 本章节
本章节指导您第一次在 VRChat 中使用 Slime 追踪器的设置。
:::

1. 启动 SlimeVR，确认所有追踪器已经连接且分配正确。
2. 佩戴头显与追踪器，启动 SteamVR 后进入 VRChat。
3. 在 SlimeVR 打开“设置 - VRChat 设置警告”，记录黄色感叹号提示，再按当前软件版本逐项调整。

   <div class="manual-image-grid manual-image-grid--three">
     <figure><img src="/images/vrchat/step-01.png" alt="SlimeVR VRChat 设置警告页面" /><figcaption>打开 VRChat 设置警告页面。</figcaption></figure>
     <figure><img src="/images/vrchat/step-02.png" alt="SlimeVR VRChat 设置警告项目" /><figcaption>根据黄色提示检查项目。</figcaption></figure>
     <figure><img src="/images/vrchat/step-03.png" alt="VRChat 设置提示示例" /><figcaption>以当前版本的提示为准。</figcaption></figure>
   </div>

## VRChat 追踪设置

1. 换出 VRChat 面板，点击设置进入大菜单。

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-04.png" alt="VRChat 打开设置大菜单" /><figcaption>从面板进入设置大菜单。</figcaption></figure>
   </div>

2. 进入“设置 - 大菜单 - 镜子”，打开全身校准时的个人镜子。

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-05.png" alt="VRChat 镜子设置" /><figcaption>开启全身校准时的个人镜子。</figcaption></figure>
   </div>

3. 填写玩家真实身高；它不需要与 SlimeVR 内的身高设置一致。

   ::: tip 真实身高
   VRChat 里的身体要填写本人的真实身高！SlimeVR 的身高无需与 VRChat 一致。
   :::

   ::: tip 切换模型
   切换不同的模型要查看追踪器节点是否与模型对齐，如果没有对齐需要微调骨骼。
   :::

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-06.png" alt="VRChat 真实身高设置" /><figcaption>填写自己的真实身高。</figcaption></figure>
   </div>

4. 打开“禁用肩部追踪以及肩宽补偿”。
5. 打开全身校准视觉反馈，追踪器吸附范围设为 0.2 米，追踪器外观设为方向轴。

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-07.png" alt="VRChat 全身校准视觉反馈设置" /><figcaption>设置视觉反馈、吸附范围与方向轴。</figcaption></figure>
   </div>

## 每次游玩前

每次使用前请按顺序准备：

1. 启动 SlimeVR，佩戴好头显与追踪器，进入 VRChat。
2. 点击「漂移重置 - 完整重置」，保持直立姿势直到倒计时结束；再点击「佩戴 - 身体」，保持滑雪姿势直到倒计时结束。

   ::: tip 校正不理想？
   如果校正后，追踪器所在的位置或方向不理想，可再重复此步骤直到满意为止。
   :::

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-08.png" alt="SlimeVR 完整重置与佩戴校准入口" /><figcaption>依次执行完整重置和身体佩戴校准。</figcaption></figure>
   </div>

3. 使用 8 点及以上且分配了脚部追踪器时，继续点击「佩戴 - 脚部」，踮起脚尖直到倒计时结束。

   ::: tip 没有脚部追踪器？
   若脚部没有分配追踪器，可跳过此步骤。
   :::

4. 完成上述步骤后，尽快打开 VRChat 菜单，保持双腿站直不动，点击校准。

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-09.png" alt="VRChat 全身校准前站立姿势" /><figcaption>校准前保持站直稳定。</figcaption></figure>
   </div>

5. 保持双腿站直、双手伸直摆出 T-Pose（仅在手臂有追踪器时）；让追踪器（红色圆圈位置）与模型对应部位尽可能重合。

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-10.png" alt="VRChat 追踪器与模型对齐" /><figcaption>让追踪器尽量与模型部位重合。</figcaption></figure>
   </div>

6. 主要调整五个位置以匹配角色模型的骨架（具体按追踪器数量而定），点击右侧倒三角查看更详细的调整项。

   <div class="manual-image-grid manual-image-grid--single">
     <figure><img src="/images/vrchat/step-11.png" alt="SlimeVR 骨架调整界面" /><figcaption>不同模型可在此调整骨架。</figcaption></figure>
   </div>

7. 调整完成后，将绿色圆圈调整到较小并与模型对齐，按下手柄扳机键完成绑定。

::: tip 不同模型
不同模型一般都需要重新调整骨架后再绑定；使用相同模型再次游玩时通常不需要调整。
:::

## 动作异常时

- 重新佩戴、重新启动应用后，优先重做完整重置和身体佩戴校准。
- 长时间使用产生自然漂移时，可结合情况使用“完整重置”或“重置航向轴”。
- 运动后方向仍不正确时，先重新固定绑带，再重做完整重置与佩戴校准。
- 仍有问题时参阅[故障排查](/support/troubleshooting)，并附上 SlimeVR 与 VRChat 的录屏联系[售后支持](/support/)。
