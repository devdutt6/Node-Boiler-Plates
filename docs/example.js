//SignUp
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Signing up the User
 *     tags:
 *        - User-Signup
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                  type: string
 *                  example: "admin@mail.com"
 *                password:
 *                  type: string
 *                  example: "admin@123"
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorised Request
 *       403:
 *         description: Forbidden Request
 *       404:
 *         description: Error Not Found
 *       409:
 *         description: Duplicate Not Allowed, Conflict Raised
 *       500:
 *         description: Internal Server Error
 *
 */

//VerifyEmail (via-Mail)
/**
 *
 * @swagger
 * /verifyMail:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Link which was sent to the user email is being verified
 *     tags:
 *        - User-Signup
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorised request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */

//SignIn
/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Signing in the user with creds provided by them
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                  type: string
 *                  example: "admin@mail.com"
 *                password:
 *                  type: string
 *                  example: "admin@123"
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorised Request
 *       403:
 *         description: Forbidden Request
 *       404:
 *         description: Error Not Found
 *       409:
 *         description: Duplicate Not Allowed, Conflict Raised
 *       500:
 *         description: Internal Server Error
 *
 */

//Refresh-Token
/**
 * @swagger
 * /refreshAccessToken:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Refresh-Token
 *     tags:
 *        - User-Token
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorised Request
 *       403:
 *         description: Forbidden Request
 *       404:
 *         description: Error Not Found
 *       409:
 *         description: Duplicate Not Allowed, Conflict Raised
 *       500:
 *         description: Internal Server Error
 *
 */

//Forgot-Password
/**
 * @swagger
 * /forgotPassword:
 *   post:
 *     summary: Forgot-Password
 *     tags:
 *        - User-Forgot
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                  type: string
 *                  example: "admin@mail.com"
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorised Request
 *       403:
 *         description: Forbidden Request
 *       404:
 *         description: Error Not Found
 *       409:
 *         description: Duplicate Not Allowed, Conflict Raised
 *       500:
 *         description: Internal Server Error
 *
 */

//Change-Password(via-Mail)
/**
 * @swagger
 * /changePasswordMail:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Change-Password (Via-Mail)
 *     tags:
 *        - User-Forgot
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                newPassword:
 *                  type: string
 *                  example: "admin@1234"
 *                oldPassword:
 *                  type: string
 *                  example: "admin@123"
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorised Request
 *       403:
 *         description: Forbidden Request
 *       404:
 *         description: Error Not Found
 *       409:
 *         description: Duplicate Not Allowed, Conflict Raised
 *       500:
 *         description: Internal Server Error
 *
 */

//ChangePassword
/**
 * @swagger
 * /changePassword:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: ChangePassword
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                newPassword:
 *                  type: string
 *                  example: "admin@1234"
 *                oldPassword:
 *                  type: string
 *                  example: "admin@123"
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorised Request
 *       403:
 *         description: Forbidden Request
 *       404:
 *         description: Error Not Found
 *       409:
 *         description: Duplicate Not Allowed, Conflict Raised
 *       500:
 *         description: Internal Server Error
 *
 */

//Upload
/**

 * @swagger
 * /uploadProfile:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Upload Profile Photo
 *     tags:
 *        - User
 *     requestBody:
 *       required: true
 *       content:
 *           multipart/form-data:
 *              schema:
 *                type: object
 *                properties:
 *                  file:
 *                      type: string
 *                      format: binary
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorised Request
 *       403:
 *         description: Forbidden Request
 *       404:
 *         description: Error Not Found
 *       409:
 *         description: Duplicate Not Allowed, Conflict Raised
 *       500:
 *         description: Internal Server Error
 *
 */

