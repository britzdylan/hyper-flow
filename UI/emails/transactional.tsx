export function ResetPasswordRequestEmail({
  title = 'title',
  description = '',
  action = '',
  actionName = 'Hello Again',
  appUrl,
  appName,
}: any): JSX.Element {
  return (
    <body style='background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'>
      <table
        align="center"
        width="100%"
        border="0"
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        style="max-width:560px;margin:0 auto;padding:20px 0 48px"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <img
                alt="Linear"
                height="42"
                src="https://react-email-demo-48zvx380u-resend.vercel.app/static/linear-logo.png"
                style="display:block;outline:none;border:none;text-decoration:none;border-radius:21px;width:42px;height:42px"
                width="42"
              />
              <h1 style="font-size:24px;letter-spacing:-0.5px;line-height:1.3;font-weight:400;color:#484848;padding:17px 0 0">
                {title}
              </h1>
              <table
                align="center"
                width="100%"
                border="0"
                cellPadding="0"
                cellSpacing="0"
                role="presentation"
                style="padding:27px 0 27px"
              >
                <tbody>
                  <tr>
                    <td>
                      <a
                        href={action}
                        style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:#5e6ad2;border-radius:3px;font-weight:600;color:#fff;font-size:15px;text-align:center;padding:11px 23px 11px 23px"
                        target="_blank"
                      >
                        {actionName}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p style="font-size:15px;line-height:1.4;margin:0 0 15px;color:#3c4149">
                {description}
              </p>
              {/* <code style="font-family:monospace;font-weight:700;padding:1px 4px;background-color:#dfe1e4;letter-spacing:-0.3px;font-size:21px;border-radius:4px;color:#3c4149">
                tt226-5398x
              </code> */}
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#dfe1e4;margin:42px 0 26px" />
              <a
                href={appUrl}
                style="color:#b4becc;text-decoration:none;font-size:14px"
                target="_blank"
              >
                {appName}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    // <table>
    //   <h1 class="text-2xl font-black">{title}</h1>
    //   <p>{description}</p>
    //   <a target="_blank" href={action} class="underline">
    //     {actionName}
    //   </a>
    //   <br />
    //   <img
    //     height="32"
    //     src="https://img.freepik.com/free-vector/hand-drawn-flat-design-anarchy-symbol_23-2149244760.jpg"
    //     style="display:block;outline:none;border:none;text-decoration:none"
    //     width="32"
    //   />
    //   <br />
    //   <small>If you didn't try to {title}, you can safely ignore this email.</small>
    // </table>
  )
}
