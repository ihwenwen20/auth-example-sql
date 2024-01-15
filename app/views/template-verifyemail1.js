const template_verifyEmail = `<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>{{params.appName}} | {{params.subject}}</title>
	<style type="text/css">
		#outlook a {
			padding: 0;
		}

		.ExternalClass {
			width: 100%;
		}

		.ExternalClass,
		.ExternalClass p,
		.ExternalClass span,
		.ExternalClass font,
		.ExternalClass td,
		.ExternalClass div {
			line-height: 100%;
		}

		table td {
			border-collapse: collapse;
			mso-line-height-rule: exactly;
		}

		.editable.image {
			font-size: 0 !important;
			line-height: 0 !important;
		}

		.nl2go_preheader {
			display: none !important;
			mso-hide: all !important;
			mso-line-height-rule: exactly;
			visibility: hidden !important;
			line-height: 0px !important;
			font-size: 0px !important;
		}

		body {
			width: 100% !important;
			-webkit-text-size-adjust: 100%;
			-ms-text-size-adjust: 100%;
			margin: 0;
			padding: 0;
		}

		img {
			outline: none;
			text-decoration: none;
			-ms-interpolation-mode: bicubic;
		}

		a img {
			border: none;
		}

		table {
			border-collapse: collapse;
			mso-table-lspace: 0pt;
			mso-table-rspace: 0pt;
		}

		th {
			font-weight: normal;
			text-align: left;
		}

		*[class="gmail-fix"] {
			display: none !important;
		}
	</style>
	<style type="text/css">
		@media (max-width: 600px) {
			.gmx-killpill {
				content: ' \x03D1';
			}
		}
	</style>
	<style type="text/css">
		@media (max-width: 600px) {
			.gmx-killpill {
				content: ' \x03D1';
			}

			.r0-o {
				border-style: solid !important;
				margin: 0 auto 0 auto !important;
				width: 320px !important
			}

			.r1-i {
				background-color: #ebe9fb !important
			}

			.r2-c {
				box-sizing: border-box !important;
				text-align: center !important;
				valign: top !important;
				width: 100% !important
			}

			.r3-o {
				border-style: solid !important;
				margin: 0 auto 0 auto !important;
				width: 100% !important
			}

			.r4-i {
				background-color: #eff2f7 !important;
				padding-bottom: 20px !important;
				padding-left: 15px !important;
				padding-right: 15px !important;
				padding-top: 20px !important
			}

			.r5-c {
				box-sizing: border-box !important;
				display: block !important;
				valign: top !important;
				width: 100% !important
			}

			.r6-o {
				border-style: solid !important;
				width: 100% !important
			}

			.r7-i {
				background-color: #5b2aa9 !important;
				padding-bottom: 0px !important;
				padding-left: 15px !important;
				padding-right: 15px !important;
				padding-top: 0px !important
			}

			.r8-c {
				box-sizing: border-box !important;
				text-align: center !important;
				valign: top !important;
				width: 42px !important
			}

			.r9-o {
				border-bottom-color: #000000 !important;
				border-bottom-width: 2px !important;
				border-left-color: #000000 !important;
				border-left-width: 2px !important;
				border-right-color: #000000 !important;
				border-right-width: 2px !important;
				border-style: solid !important;
				border-top-color: #000000 !important;
				border-top-width: 2px !important;
				margin: 0 auto 0 auto !important;
				width: 42px !important
			}

			.r10-i {
				padding-bottom: 0px !important;
				padding-top: 0px !important
			}

			.r11-o {
				background-image: url('https://repository-images.githubusercontent.com/490558258/4d30ccd4-f78e-4c4e-a6f0-a5d4bd747076') !important;
				border-style: solid !important;
				margin: 0 auto 0 auto !important;
				width: 100% !important
			}

			.r12-i {
				padding-bottom: 0px !important;
				padding-left: 15px !important;
				padding-right: 15px !important;
				padding-top: 0px !important
			}

			.r13-i {
				padding-left: 0px !important;
				padding-right: 0px !important
			}

			.r14-c {
				box-sizing: border-box !important;
				text-align: left !important;
				width: 100% !important
			}

			.r15-o {
				border-style: solid !important;
				margin: 0 auto 0 0 !important;
				width: 100% !important
			}

			.r16-c {
				box-sizing: border-box !important;
				text-align: left !important;
				valign: top !important;
				width: 100% !important
			}

			.r17-o {
				background-image: url('https://repository-images.githubusercontent.com/490558258/4d30ccd4-f78e-4c4e-a6f0-a5d4bd747076') !important;
				background-size: contain !important;
				border-style: solid !important;
				margin: 0 auto 0 auto !important;
				width: 100% !important
			}

			.r18-i {
				padding-bottom: 190px !important;
				padding-left: 20px !important;
				padding-right: 20px !important;
				padding-top: 0px !important
			}

			.r19-i {
				padding-top: 13px !important;
				text-align: left !important
			}

			.r20-i {
				padding-bottom: 6px !important;
				padding-left: 0px !important;
				padding-right: 0px !important
			}

			.r21-o {
				border-style: solid !important;
				margin: 0 auto 0 0 !important;
				margin-bottom: 6px !important;
				width: 100% !important
			}

			.r22-i {
				text-align: left !important
			}

			.r23-o {
				border-style: solid !important;
				margin: 0 auto 0 auto !important;
				margin-bottom: 4px !important;
				margin-top: 4px !important;
				width: 70% !important
			}

			.r24-i {
				text-align: center !important
			}

			.r25-r {
				background-color: #5b2aa9 !important;
				border-radius: 20px !important;
				box-sizing: border-box;
				height: initial !important;
				padding-bottom: 6px !important;
				padding-left: 0px !important;
				padding-right: 0px !important;
				padding-top: 0px !important;
				text-align: center !important;
				width: 100% !important
			}

			.r26-c {
				box-sizing: border-box !important;
				text-align: center !important;
				valign: middle !important;
				width: 100% !important
			}

			.r27-i {
				background-color: #ffffff !important;
				padding-bottom: 10px !important;
				padding-left: 15px !important;
				padding-right: 15px !important;
				padding-top: 5px !important
			}

			.r28-c {
				box-sizing: border-box !important;
				display: block !important;
				valign: middle !important;
				width: 100% !important
			}

			.r29-i {
				padding-bottom: 0px !important;
				padding-left: 0px !important;
				padding-right: 0px !important;
				padding-top: 0px !important
			}

			.r30-o {
				border-style: solid !important;
				margin: 0 auto 0 0 !important;
				margin-bottom: 4px !important;
				margin-top: 4px !important;
				width: 100% !important
			}

			.r31-i {
				padding-bottom: 0px !important;
				padding-left: 0px !important;
				padding-right: 0px !important;
				padding-top: 0px !important;
				text-align: left !important
			}

			.r32-o {
				border-style: solid !important;
				margin: 0 auto 0 0 !important;
				margin-bottom: 0px !important;
				margin-top: 6px !important;
				width: 100% !important
			}

			.r33-i {
				padding-bottom: 0px !important;
				padding-top: 4px !important;
				text-align: left !important
			}

			.r34-i {
				background-color: #5b2aa9 !important;
				padding-bottom: 12px !important;
				padding-left: 20px !important;
				padding-right: 20px !important;
				padding-top: 7px !important
			}

			.r35-c {
				box-sizing: border-box !important;
				text-align: center !important;
				width: 100% !important
			}

			.r36-c {
				box-sizing: border-box !important;
				width: 100% !important
			}

			.r37-i {
				font-size: 0px !important;
				padding-bottom: 0px !important;
				padding-left: 20px !important;
				padding-right: 20px !important;
				padding-top: 0px !important
			}

			.r38-c {
				box-sizing: border-box !important;
				width: 32px !important
			}

			.r39-o {
				border-style: solid !important;
				margin-right: 8px !important;
				width: 32px !important
			}

			.r40-i {
				padding-bottom: 5px !important;
				padding-top: 5px !important
			}

			.r41-o {
				border-style: solid !important;
				margin-right: 0px !important;
				width: 32px !important
			}

			.r42-o {
				border-style: solid !important;
				margin: 0 auto 0 0 !important;
				margin-bottom: 0px !important;
				margin-top: 0px !important;
				width: 100% !important
			}

			.r43-i {
				padding-bottom: 0px !important;
				padding-left: 0px !important;
				padding-right: 0px !important;
				padding-top: 0px !important;
				text-align: center !important
			}

			body {
				-webkit-text-size-adjust: none
			}

			.nl2go-responsive-hide {
				display: none
			}

			.nl2go-body-table {
				min-width: unset !important
			}

			.mobshow {
				height: auto !important;
				overflow: visible !important;
				max-height: unset !important;
				visibility: visible !important;
				border: none !important
			}

			.resp-table {
				display: inline-table !important
			}

			.magic-resp {
				display: table-cell !important
			}
		}
	</style><!--[if !mso]><!-->
	<style type="text/css">
		@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap");
	</style><!--<![endif]-->
	<style type="text/css">
		p,
		h1,
		h2,
		h3,
		h4,
		ol,
		ul {
			margin: 0;
		}

		a,
		a:link {
			color: #3F3D56;
			text-decoration: none
		}

		.nl2go-default-textstyle {
			color: #3F3D56;
			font-family: Open Sans, Arial, Helvetica, sans-serif;
			font-size: 18px;
			line-height: 1.3;
			word-break: break-word
		}

		.default-button {
			color: #ffffff;
			font-family: Open Sans, Arial, Helvetica, sans-serif;
			font-size: 24px;
			font-style: normal;
			font-weight: bold;
			line-height: 1.15;
			text-decoration: none;
			word-break: break-word
		}

		.sib_class_14_white_reg {
			color: #ffffff;
			font-family: Open Sans, Arial, Helvetica, sans-serif;
			font-size: 14px;
			font-weight: 400;
			word-break: break-word
		}

		.sib_class_14_white_b {
			color: #ffffff;
			font-family: Open Sans, Arial, Helvetica, sans-serif;
			font-size: 14px;
			font-weight: 700;
			word-break: break-word
		}

		.default-heading1 {
			color: #58517a;
			font-family: Comic Sans MS, arial;
			font-size: 48px;
			word-break: break-word
		}

		.default-heading2 {
			color: #52bf53;
			font-family: Comic Sans MS, arial;
			font-size: 30px;
			word-break: break-word
		}

		.default-heading3 {
			color: #3f3d56;
			font-family: Comic Sans MS, arial;
			font-size: 24px;
			word-break: break-word
		}

		.default-heading4 {
			color: #3f3d56;
			font-family: Comic Sans MS, arial;
			font-size: 18px;
			word-break: break-word
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
			font-size: inherit !important;
			font-family: inherit !important;
			font-weight: inherit !important;
			line-height: inherit !important;
		}

		.no-show-for-you {
			border: none;
			display: none;
			float: none;
			font-size: 0;
			height: 0;
			line-height: 0;
			max-height: 0;
			mso-hide: all;
			overflow: hidden;
			table-layout: fixed;
			visibility: hidden;
			width: 0;
		}
	</style>
	<!--[if mso]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]-->
	<style type="text/css">
		a:link {
			color: #3f3d56;
			text-decoration: none;
		}
	</style>
</head>

<body bgcolor="#ebe9fb" text="#3F3D56" link="#3F3D56" yahoo="fix" style="background-color: #ebe9fb;">
	<table cellspacing="0" cellpadding="0" border="0" role="presentation" class="nl2go-body-table" width="100%"
		style="background-color: #ebe9fb; width: 100%;">
		<tr>
			<td>
				<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600" align="center" class="r0-o"
					style="table-layout: fixed; width: 600px;">
					<tr>
						<td valign="top" class="r1-i" style="background-color: #ebe9fb;">
							<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center"
								class="r3-o" style="table-layout: fixed; width: 100%;">
								<tr>
									<td class="r4-i" style="background-color: #eff2f7; padding-bottom: 20px; padding-top: 20px;">
										<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
											<tr>
												<th width="100%" valign="top" class="r5-c"
													style="background-color: #5b2aa9; font-weight: normal;">
													<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
														class="r6-o" style="table-layout: fixed; width: 100%;">
														<tr>
															<td valign="top" class="r7-i"
																style="background-color: #5b2aa9; padding-left: 15px; padding-right: 15px; padding-top: 4px;">
																<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
																	<tr>
																		<td class="r8-c" align="center">
																			<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="60"
																				class="r9-o"
																				style="border-bottom-color: #000000; border-bottom-width: 2px; border-collapse: separate; border-left-color: #000000; border-left-width: 2px; border-radius: 4px; border-right-color: #000000; border-right-width: 2px; border-style: solid; border-top-color: #000000; border-top-width: 2px; table-layout: fixed; width: 60px;">
																				<tr>
																					<td class="r10-i" style="border-radius: 2px;"> <img
																							src="https://img.mailinblue.com/6506598/images/content_library/original/65427ab523baca7da022dfb9.png"
																							width="56" alt="logo" border="0"
																							style="display: block; width: 100%; border-radius: 2px;"></td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center"
								class="r11-o"
								style="background-color: #ffffff; background-image: url('https://repository-images.githubusercontent.com/490558258/4d30ccd4-f78e-4c4e-a6f0-a5d4bd747076'); font-size: 0; table-layout: fixed; width: 100%;">
								<tr>
									<td class="r12-i">
										<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
											<tr>
												<th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
													<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
														class="r6-o" style="table-layout: fixed; width: 100%;">
														<tr>
															<td valign="top" class="r13-i" style="padding-left: 15px; padding-right: 15px;">
																<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
																	<tr>
																		<td class="r14-c" align="left">
																			<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="570"
																				class="r15-o" style="table-layout: fixed;">
																				<tr>
																					<td class="r10-i" style="height: 3px;">
																						<table width="100%" cellspacing="0" cellpadding="0" border="0"
																							role="presentation">
																							<tr>
																								<td>
																									<table width="100%" cellspacing="0" cellpadding="0" border="0"
																										role="presentation" valign="" class="r10-i" height="3"
																										style="border-top-style: solid; background-clip: border-box; border-top-color: #4A4A4A; border-top-width: 3px; font-size: 3px; line-height: 3px;">
																										<tr>
																											<td height="0" style="font-size: 0px; line-height: 0px;">­</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																	<tr>
																		<td class="r16-c nl2go-default-textstyle" align="left"
																			style="color: #3f3d56; font-family: Open Sans,Arial,Helvetica,sans-serif; font-size: 18px; word-break: break-word; line-height: 1.8; text-align: left; valign: top;">
																			<div>
																				<h4 class="default-heading4"
																					style="margin: 0; color: #3f3d56; font-family: Comic Sans MS,arial; font-size: 18px; word-break: break-word;">
																					<span
																						style="font-family: 'Comic sans ms', cursive, Arial;">Hi {{params.username}},</span>
																				</h4>
																				<p style="margin: 0;"><span
																						style="font-family: 'Comic sans ms', cursive, Arial;">Thanks for signing up
																						and welcome!</span> 😊<span style="color: #d4d4d4;">👋</span></p>
																			</div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center"
								class="r17-o"
								style="background-color: #ffffff; background-image: url('https://repository-images.githubusercontent.com/490558258/4d30ccd4-f78e-4c4e-a6f0-a5d4bd747076'); background-position: bottom; background-repeat: no-repeat; background-size: contain; font-size: 0; table-layout: fixed; width: 100%;">
								<tr>
									<td class="r18-i" style="padding-bottom: 150px; padding-left: 40px;">
										<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
											<tr>
												<th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
													<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
														align="left" class="r15-o" style="table-layout: fixed; width: 100%;">
														<tr>
															<td align="left" valign="top" class="r19-i nl2go-default-textstyle"
																style="color: #3f3d56; font-family: Open Sans,Arial,Helvetica,sans-serif; font-size: 18px; word-break: break-word; line-height: 1; padding-top: 13px; text-align: left;">
																<div>
																	<h2 class="default-heading2"
																		style="margin: 0; color: #52bf53; font-family: Comic Sans MS,arial; font-size: 30px; word-break: break-word;">
																		<span style="font-family: 'Comic sans ms', cursive, Arial;">Let's connect!</span>
																	</h2>
																</div>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center"
								class="r11-o"
								style="background-color: #ffffff; background-image: url('https://repository-images.githubusercontent.com/490558258/4d30ccd4-f78e-4c4e-a6f0-a5d4bd747076'); font-size: 0; table-layout: fixed; width: 100%;">
								<tr>
									<td class="r12-i">
										<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
											<tr>
												<th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
													<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
														class="r6-o" style="table-layout: fixed; width: 100%;">
														<tr>
															<td valign="top" class="r20-i"
																style="padding-bottom: 6px; padding-left: 15px; padding-right: 15px;">
																<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
																	<tr>
																		<td class="r16-c" align="left">
																			<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
																				class="r21-o" style="table-layout: fixed; width: 100%;">
																				<tr>
																					<td align="justify" valign="top" class="r22-i nl2go-default-textstyle"
																						style="color: #3f3d56; font-family: Open Sans,Arial,Helvetica,sans-serif; font-size: 18px; word-break: break-word; line-height: 1; text-align: justify;">
																						<div>
																							<p style="margin: 0;"><span
																									style="font-family: 'Trebuchet ms', helvetica, sans-serif, Arial; font-size: 14px;">Before
																									we continue, we are happy you're here. Let's get your email address
																									verified:</span></p>
																						</div>
																					</td>
																				</tr>
																				<tr class="nl2go-responsive-hide">
																					<td height="6" style="font-size: 6px; line-height: 6px;">­</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																	<tr>
																		<td class="r2-c" align="center">
																			<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="182"
																				class="r23-o" style="table-layout: fixed; width: 182px;">
																				<tr class="nl2go-responsive-hide">
																					<td height="10" style="font-size: 10px; line-height: 10px;">­</td>
																				</tr>
																				<tr>
																					<td height="27" align="center" valign="top"
																						class="r24-i nl2go-default-textstyle"
																						style="color: #3f3d56; font-family: Open Sans,Arial,Helvetica,sans-serif; font-size: 18px; line-height: 1.3; word-break: break-word;">
																						<!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{params.url_button}}" style="v-text-anchor:middle; height: 36px; width: 181px;" arcsize="50%" fillcolor="#5b2aa9" strokecolor="#5b2aa9" strokeweight="1px" data-btn="1"> <w:anchorlock> </w:anchorlock> <v:textbox inset="0,0,0,0"> <div style="display:none;"> <center class="default-button"><span style="background-font-weight:normal;"><span style="font-size:16px;">Click to Verify Email</span></span></center> </div> </v:textbox> </v:roundrect> <![endif]-->
																						<!--[if !mso]><!-- --> <a href="{{params.url_button}}"
																							class="r25-r default-button" target="_blank" title="verifyemail"
																							data-btn="1"
																							style="font-style: normal; font-weight: bold; line-height: 1.15; text-decoration: none; word-break: break-word; border-style: solid; word-wrap: break-word; display: block; -webkit-text-size-adjust: none; background-color: #5b2aa9; border-bottom-width: 0px; border-color: #5b2aa9; border-left-width: 0px; border-radius: 28px; border-right-width: 0px; border-top-width: 0px; color: #ffffff; font-family: Open Sans, Arial, Helvetica, sans-serif; font-size: 24px; height: 27px; mso-hide: all; padding-bottom: 7px; padding-left: 0px; padding-right: 0px; padding-top: 0px; width: 182px;">
																							<span style="background-font-weight: normal;"><span
																									style="font-size: 16px;">Click to Verify Email</span></span></a>
																						<!--<![endif]--> </td>
																				</tr>
																				<tr class="nl2go-responsive-hide">
																					<td height="4" style="font-size: 4px; line-height: 4px;">­</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center"
								class="r3-o" style="table-layout: fixed; width: 100%;">
								<tr>
									<td class="r27-i" style="background-color: #ffffff; padding-bottom: 10px; padding-top: 5px;">
										<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
											<tr>
												<th width="100%" valign="middle" class="r28-c" style="font-weight: normal;">
													<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
														class="r6-o" style="table-layout: fixed; width: 100%;">
														<tr>
															<td valign="top" class="r29-i" style="padding-left: 15px; padding-right: 15px;">
																<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
																	<tr>
																		<td class="r16-c" align="left">
																			<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
																				class="r30-o" style="table-layout: fixed; width: 100%;">
																				<tr class="nl2go-responsive-hide">
																					<td height="4" style="font-size: 4px; line-height: 4px;">­</td>
																				</tr>
																				<tr>
																					<td align="justify" valign="top" class="r31-i nl2go-default-textstyle"
																						style="color: #3f3d56; font-family: Open Sans,Arial,Helvetica,sans-serif; font-size: 18px; word-break: break-word; line-height: 1.2; text-align: justify;">
																						<div>
																							<p style="margin: 0;"><span
																									style="font-family: 'Courier new', courier, monospace, Arial; font-size: 12px;">If
																									you are having trouble clicking the "Verify Email Address" button,
																									copy and paste the URL below into your web browser:</span></p>
																							<p style="margin: 0;"><a href="{{params.url_button}}" target="_blank"
																									style="color: #3f3d56; text-decoration: none;"><span
																										style="color: #5B2AA9; font-family: 'Courier new', courier, monospace, Arial; font-size: 12px;">{{params.url_button}}</span></a><span
																									style="font-family: 'Courier new', courier, monospace, Arial; font-size: 12px;">.</span>
																							</p>
																						</div>
																					</td>
																				</tr>
																				<tr class="nl2go-responsive-hide">
																					<td height="4" style="font-size: 4px; line-height: 4px;">­</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																	<tr>
																		<td class="r16-c" align="left">
																			<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
																				class="r32-o" style="table-layout: fixed; width: 100%;">
																				<tr class="nl2go-responsive-hide">
																					<td height="6" style="font-size: 6px; line-height: 6px;">­</td>
																				</tr>
																				<tr>
																					<td align="left" valign="top" class="r33-i nl2go-default-textstyle"
																						style="color: #3f3d56; font-family: Open Sans,Arial,Helvetica,sans-serif; font-size: 18px; word-break: break-word; line-height: 1; padding-bottom: 8px; padding-top: 4px; text-align: left;">
																						<div>
																							<h4 class="default-heading4"
																								style="margin: 0; color: #3f3d56; font-family: Comic Sans MS,arial; font-size: 18px; word-break: break-word;">
																								<span
																									style="font-family: 'Comic sans ms', cursive, Arial; font-size: 16px;"><i>Thank
																										you for your trust in us.</i></span></h4>
																							<p style="margin: 0;"> </p>
																							<p style="margin: 0;"><span
																									style="font-family: 'Comic sans ms', cursive, Arial; font-size: 16px;">Regards</span><span
																									style="font-family: 'Comic sans ms', cursive, Arial;">,</span></p>
																							<p style="margin: 0;"><br><span
																									style="font-family: 'Comic sans ms', cursive, Arial; font-size: 16px;">{{params.appName}}
																									Team</span></p>
																						</div>
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</table>
									</td>
								</tr>
							</table>
							<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center"
								class="r3-o" style="table-layout: fixed; width: 100%;">
								<tr>
									<td class="r34-i" style="background-color: #5b2aa9; padding-bottom: 12px; padding-top: 7px;">
										<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
											<tr>
												<th width="100%" valign="middle" class="r28-c" style="font-weight: normal;">
													<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
														align="left" class="r15-o" style="table-layout: fixed; width: 100%;">
														<tr>
															<td align="center" valign="top" class="r24-i nl2go-default-textstyle"
																style="color: #3f3d56; font-family: Open Sans,Arial,Helvetica,sans-serif; font-size: 18px; word-break: break-word; line-height: 1.5; text-align: center;">
																<div>
																	<div class="sib_class_14_white_reg"
																		style="color: #fff; font-family: Open Sans,Arial,Helvetica,sans-serif; font-size: 14px; font-weight: 400; word-break: break-word;">
																		Find Us</div>
																</div>
															</td>
														</tr>
													</table>
													<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600"
														align="center" class="r3-o" style="table-layout: fixed; width: 600px;">
														<tr>
															<td valign="top">
																<table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
																	<tr>
																		<td class="r36-c" style="display: inline-block;">
																			<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600"
																				class="r6-o" style="table-layout: fixed; width: 600px;">
																				<tr>
																					<td class="r37-i" style="padding-left: 184px; padding-right: 184px;">
																						<table width="100%" cellspacing="0" cellpadding="0" border="0"
																							role="presentation">
																							<tr>
																								<th width="40" class="r38-c mobshow resp-table"
																									style="font-weight: normal;">
																									<table cellspacing="0" cellpadding="0" border="0" role="presentation"
																										width="100%" class="r39-o"
																										style="table-layout: fixed; width: 100%;">
																										<tr>
																											<td class="r40-i"
																												style="font-size: 0px; line-height: 0px; padding-bottom: 5px; padding-top: 5px;">
																												<img
																													src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/facebook_32px.png"
																													width="32" border="0" style="display: block; width: 100%;">
																											</td>
																											<td class="nl2go-responsive-hide" width="8"
																												style="font-size: 0px; line-height: 1px;">­ </td>
																										</tr>
																									</table>
																								</th>
																								<th width="40" class="r38-c mobshow resp-table"
																									style="font-weight: normal;">
																									<table cellspacing="0" cellpadding="0" border="0" role="presentation"
																										width="100%" class="r39-o"
																										style="table-layout: fixed; width: 100%;">
																										<tr>
																											<td class="r40-i"
																												style="font-size: 0px; line-height: 0px; padding-bottom: 5px; padding-top: 5px;">
																												<img
																													src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/website_32px.png"
																													width="32" border="0" style="display: block; width: 100%;">
																											</td>
																											<td class="nl2go-responsive-hide" width="8"
																												style="font-size: 0px; line-height: 1px;">­ </td>
																										</tr>
																									</table>
																								</th>
																								<th width="40" class="r38-c mobshow resp-table"
																									style="font-weight: normal;">
																									<table cellspacing="0" cellpadding="0" border="0" role="presentation"
																										width="100%" class="r39-o"
																										style="table-layout: fixed; width: 100%;">
																										<tr>
																											<td class="r40-i"
																												style="font-size: 0px; line-height: 0px; padding-bottom: 5px; padding-top: 5px;">
																												<img
																													src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/instagram_32px.png"
																													width="32" border="0" style="display: block; width: 100%;">
																											</td>
																											<td class="nl2go-responsive-hide" width="8"
																												style="font-size: 0px; line-height: 1px;">­ </td>
																										</tr>
																									</table>
																								</th>
																								<th width="40" class="r38-c mobshow resp-table"
																									style="font-weight: normal;">
																									<table cellspacing="0" cellpadding="0" border="0" role="presentation"
																										width="100%" class="r39-o"
																										style="table-layout: fixed; width: 100%;">
																										<tr>
																											<td class="r40-i"
																												style="font-size: 0px; line-height: 0px; padding-bottom: 5px; padding-top: 5px;">
																												<img
																													src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/youtube_32px.png"
																													width="32" border="0" style="display: block; width: 100%;">
																											</td>
																											<td class="nl2go-responsive-hide" width="8"
																												style="font-size: 0px; line-height: 1px;">­ </td>
																										</tr>
																									</table>
																								</th>
																								<th width="40" class="r38-c mobshow resp-table"
																									style="font-weight: normal;">
																									<table cellspacing="0" cellpadding="0" border="0" role="presentation"
																										width="100%" class="r39-o"
																										style="table-layout: fixed; width: 100%;">
																										<tr>
																											<td class="r40-i"
																												style="font-size: 0px; line-height: 0px; padding-bottom: 5px; padding-top: 5px;">
																												<img
																													src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/whatsapp_32px.png"
																													width="32" border="0" style="display: block; width: 100%;">
																											</td>
																											<td class="nl2go-responsive-hide" width="8"
																												style="font-size: 0px; line-height: 1px;">­ </td>
																										</tr>
																									</table>
																								</th>
																								<th width="32" class="r38-c mobshow resp-table"
																									style="font-weight: normal;">
																									<table cellspacing="0" cellpadding="0" border="0" role="presentation"
																										width="100%" class="r41-o"
																										style="table-layout: fixed; width: 100%;">
																										<tr>
																											<td class="r40-i"
																												style="font-size: 0px; line-height: 0px; padding-bottom: 5px; padding-top: 5px;">
																												<img
																													src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/telegram_32px.png"
																													width="32" border="0" style="display: block; width: 100%;">
																											</td>
																										</tr>
																									</table>
																								</th>
																							</tr>
																						</table>
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
														align="left" class="r42-o" style="table-layout: fixed; width: 100%;">
														<tr>
															<td align="center" valign="top" class="r43-i nl2go-default-textstyle"
																style="color: #3f3d56; font-family: Open Sans,Arial,Helvetica,sans-serif; font-size: 18px; word-break: break-word; line-height: 1.5; text-align: center;">
																<div>
																	<p style="margin: 0;"> </p>
																	<div class="sib_class_14_white_reg"
																		style="color: #fff; font-family: Open Sans,Arial,Helvetica,sans-serif; font-size: 14px; font-weight: 400; word-break: break-word;">
																		<span style="font-family: 'Times new roman', times, serif, Arial;">Kp. Ciparay
																			Peuntas Samarang 44161 Garut</span><br><a href="mailto:contact@1112-project.com"
																			style="color: #3f3d56; text-decoration: none;"><span
																				style="color: #ffffff; font-family: 'Times new roman', times, serif, Arial;">contact@1112-project.com</span></a>
																	</div>
																	<div class="sib_class_14_white_reg"
																		style="color: #fff; font-family: Open Sans,Arial,Helvetica,sans-serif; font-size: 14px; font-weight: 400; word-break: break-word;">
																		<span
																			style="font-family: 'Comic sans ms', cursive, Arial;"><strong>©</strong></span><span
																			style="color: #ffffff; font-family: 'Comic sans ms', cursive, Arial;"><strong>
																				2024. {{params.appName}} </strong></span>All rights Reserved</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>

</html>`

module.exports = template_verifyEmail;